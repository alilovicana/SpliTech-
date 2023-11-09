import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IsVisibleService } from 'src/app/is-visible.service';
import { ShowcaseService } from '../../showcase.service';

@Component({
  selector: 'app-cover-green',
  templateUrl: './cover-green.component.html',
  styleUrls: ['./cover-green.component.css'],
})
export class CoverGreenComponent implements AfterViewInit, OnInit {
  public styleGreen: string[] = [
    'styleGreen',
    '../../../assets/blueIzbornik.svg',
    '../../../assets/blueStrelica.svg',
  ];
  public styleBlue: string[] = [
    'styleBlue',
    '../../../assets/greenIzbornik.svg',
    '../../../assets/greenStrelica.svg',
  ];

  public heightOfElement;
  public activeStyle: string[] = this.styleGreen;
  constructor(
    public $isVisible: IsVisibleService,
    public $showcase: ShowcaseService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.activeStyle = this.styleBlue;
    }, 1000);
  }
  navigateTo(path: string) {
    this.$showcase.isCoverOpen = true;
    this.$showcase.show(path);
  }
  isScrolledToBottom() {
    let canvas = document.getElementById('canvas');
    let element = document.getElementById(
      this.$showcase.elementsOrder[this.$showcase.currentElement]
    );
    let scrolledToBottom =
      Math.abs(element.scrollHeight - canvas.scrollTop - canvas.clientHeight) <
      1;
    console.log('element.scrollHeight' + element.scrollHeight);
    console.log('canvas.scrollTop ' + canvas.scrollTop);
    console.log('canvas.clientHeight' + canvas.clientHeight);
    //  return scrolledToBottom || (canvas.clientHeight === 0 ? element.offsetHeight< 700 : element.offsetHeight < canvas.clientHeight);
    if (canvas.clientHeight == 0) return true;
    return scrolledToBottom || element.offsetHeight < canvas.clientHeight;
  }
  ngAfterViewInit(): void {
    /**scroll on laptop */
    document.addEventListener(
      'wheel',
      (event) => {
        if (!this.isScrolledToBottom()) return;
        event.preventDefault();
        event.stopPropagation();
        if (this.transitioning) return;
        console.log('wheel detected!');
        if (event.deltaY > 0 && !this.transitioning) {
          this.transitioning = true;
          if (
            this.$showcase.currentElement == 0 &&
            !this.$showcase.isCoverOpen
          ) {
            //not begun
            console.log('first situation!');
            this.$showcase.isCoverOpen = true;
            setTimeout(() => {
              this.transitioning = false;
            }, 2400);
          } else {
            if (
              this.$showcase.currentElement ===
              this.$showcase.elementsOrder.length - 1
            ) {
              this.$showcase.currentElement = 0;
            }
            console.log('incrementing');
            this.transitioning = true;
            this.$showcase.currentElement++;
            this.$showcase.show(
              this.$showcase.elementsOrder[this.$showcase.currentElement]
            );
            setTimeout(() => {
              this.transitioning = false;
            }, 2400);
          }
        } else if (event.deltaY < 0 && !this.transitioning) {
          console.log('decrementing');
          if (this.$showcase.currentElement === 0) {
            this.$showcase.currentElement = this.$showcase.elementsOrder.length;
          }
          this.transitioning = true;
          this.$showcase.currentElement--;
          this.$showcase.show(
            this.$showcase.elementsOrder[this.$showcase.currentElement]
          );
          setTimeout(() => {
            this.transitioning = false;
          }, 2400);
        } else {
          console.log('0 bodova');
        }
      },
      { passive: false }
    );
    /**scroll on mobile phone */
    let startY = null;
    console.log('startY' + startY);
    document.addEventListener(
      'touchmove',
      (event) => {
        let i = 0;
        let deltaY = event.touches[i++].clientY - startY;
        console.log('deltaY' + deltaY);
        if (Math.abs(deltaY) < 10) {
          return; //izbjegavanje malih promjena
        }
        if (!this.isScrolledToBottom()) return;
        event.preventDefault();
        event.stopPropagation();
        if (this.transitioning) return;
        console.log('wheel detected!');
        if (deltaY > 0 && !this.transitioning) {
          this.transitioning = true;
          if (
            this.$showcase.currentElement == 0 &&
            !this.$showcase.isCoverOpen
          ) {
            //not begun
            console.log('first situation!');
            this.$showcase.isCoverOpen = true;
            setTimeout(() => {
              this.transitioning = false;
            }, 2400);
          } else {
            if (
              this.$showcase.currentElement ===
              this.$showcase.elementsOrder.length - 1
            ) {
              this.$showcase.currentElement = 0;
            }
            console.log('incrementing');
            this.$showcase.currentElement++;

            this.$showcase.show(
              this.$showcase.elementsOrder[this.$showcase.currentElement]
            );
            setTimeout(() => {
              this.transitioning = false;
            }, 1000);
          }
        } else if (deltaY < 0 && !this.transitioning) {
          console.log('decrementing');
          if (this.$showcase.currentElement === 0) {
            this.$showcase.currentElement = this.$showcase.elementsOrder.length;
          }
          this.transitioning = true;
          this.$showcase.currentElement--;
          this.$showcase.show(
            this.$showcase.elementsOrder[this.$showcase.currentElement]
          );
          setTimeout(() => {
            this.transitioning = false;
          }, 1000);
        } else {
          console.log('0 bodova');
        }
        startY = event.touches[i].clientY;
        console.log('startY' + startY);
      },
      { passive: false }
    );
  }

  transitioning = false;

  scrollToContent() {
    let canvas = document.getElementById('canvas');
    canvas.scrollTo({ top: 1400, behavior: 'smooth' });
  }
}
