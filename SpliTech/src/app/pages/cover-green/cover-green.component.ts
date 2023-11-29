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

  public activeStyle: string[] = this.styleGreen;

  constructor(
    public $isVisible: IsVisibleService,
    public $showcase: ShowcaseService
  ) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.activeStyle = this.styleBlue;
    }, 1200);

    console.log("window height: " + window.innerHeight)

    if(window.innerWidth <= 800) {
      this.calculatedHeight = ((window.innerHeight - 100) - (window.innerWidth * 0.05)) + "px";
      console.log(this.calculatedHeight)
    } else {
      this.calculatedHeight = ((window.innerHeight - 150) - (window.innerWidth * 0.05)) + "px";
    }
    

    let containerElement = document.querySelector('.container');

    if (!this.$showcase.isCoverOpen) {
      containerElement.classList.add('not-open');
    }
  }
  navigateTo(path: string) {
    this.$showcase.isCoverOpen = true;
    this.$showcase.show(path);
  }

  decrementingScrollableElement = false;

  isScrolledToBottom() {
    let canvas = document.getElementById('canvas');
    let element = document.getElementById(
      this.$showcase.elementsOrder[this.$showcase.currentElement]
    );
    let scrolledToBottom;
    if (this.decrementingScrollableElement) {
      scrolledToBottom = true;
      this.decrementingScrollableElement = false;
    } else {
      scrolledToBottom =
        Math.abs(element.scrollHeight - canvas.scrollTop - canvas.clientHeight) < 1;
    }
    if (canvas.clientHeight == 0) return true;
    return scrolledToBottom || element.offsetHeight < canvas.clientHeight;
  }

  ngAfterViewInit(): void {
    /**scroll on laptop */
    document.addEventListener(
      'wheel',
      (event) => {
        let canvas = document.getElementById('canvas');

        let containerElement = document.querySelector('.container');
        containerElement.classList.remove('not-open');

        if (event.deltaY < 0 && canvas.scrollTop == 0) {
          this.decrementingScrollableElement = true;
        }

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
            console.log('deltaYincerementing ' + canvas.scrollTop)
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
          console.log('deltaYDacerementing ' + canvas.scrollTop)
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

    let startY;
    document.addEventListener(
      'touchstart',
      (event) => {
        startY = event.touches[0].clientY;
      }
    );
    document.addEventListener(
      'touchmove',
      (event) => {
        let i = 0;
        let currentY = event.touches[0].clientY;
        let deltaY = currentY - startY;
        console.log('deltaY' + deltaY);
        if (Math.abs(deltaY) < 10) {
          return; //izbjegavanje malih promjena
        }
        let canvas = document.getElementById('canvas');
        if (deltaY > 0 && canvas.scrollTop == 0) {
          this.decrementingScrollableElement = true;
        }
        if (!this.isScrolledToBottom()) return;
        event.preventDefault();
        event.stopPropagation();
        if (this.transitioning) return;
        console.log('wheel detected!');
        if (deltaY < 0 && !this.transitioning) {
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
        } else if (deltaY > 0 && !this.transitioning) {
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
        startY = currentY;
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

  calculatedHeight = "300px"




}
