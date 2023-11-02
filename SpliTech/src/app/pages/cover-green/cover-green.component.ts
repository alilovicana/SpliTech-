import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IsVisibleService } from 'src/app/is-visible.service';
import { CanvaOpenService } from 'src/app/canva-open.service';
import { ElementRef } from '@angular/core';
import { ShowcaseService } from '../../showcase.service'

@Component({
  selector: 'app-cover-green',
  templateUrl: './cover-green.component.html',
  styleUrls: ['./cover-green.component.css'],
})
export class CoverGreenComponent implements AfterViewInit,OnInit {
  constructor(
    public $isVisible : IsVisibleService,
    public $showcase : ShowcaseService
  ){

  }
 ngOnInit(): void {
  
 }

  isScrolledToBottom(){
    let canvas = document.getElementById("canvas")
    let element = document.getElementById(this.$showcase.elementsOrder[this.$showcase.currentElement])
    let scrolledToBottom = Math.abs(element.scrollHeight - canvas.scrollTop - 701) < 1;
console.log(element.scrollHeight + "  " + canvas.scrollTop)
    return scrolledToBottom || element.offsetHeight < 1500;
  }

  ngAfterViewInit(): void {
    document.addEventListener("wheel", (event) => {
      if(!this.isScrolledToBottom()) return;
      event.preventDefault();
      event.stopPropagation();
      if(this.transitioning) return
      console.log("wheel detected!")
      console.log(event.deltaY)
      if(event.deltaY > 0 && !this.transitioning) {
        this.transitioning = true;
        if(this.$showcase.currentElement == 0 && !this.isCoverOpen){ //not begun
          console.log("first situation!")
          this.isCoverOpen = true;
          setTimeout(() => {
            this.transitioning = false;
          }, 2200);
        } else {
          console.log("incrementing")
          this.$showcase.currentElement++;
          this.$showcase.show(this.$showcase.elementsOrder[this.$showcase.currentElement])
          setTimeout(() => {
            this.transitioning = false;
          }, 2200);
        }
      } else if(event.deltaY < 0 && !this.transitioning) {
        console.log("decrementing")
        this.transitioning = true;
        this.$showcase.currentElement--;
        this.$showcase.show(this.$showcase.elementsOrder[this.$showcase.currentElement])
        setTimeout(() => {
          this.transitioning = false;
        }, 2200);
      } else {
        console.log("0 bodova")
      }
    }, { passive: false });
  }

  transitioning = false;

  isNineBig = false;
  isCoverOpen = false;

  scrollToContent(){
    let canvas = document.getElementById("canvas")
    canvas.scrollTo({top: 1400, behavior: "smooth"});
  }
}
