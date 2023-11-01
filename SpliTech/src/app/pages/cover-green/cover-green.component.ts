import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { IsVisibleService } from 'src/app/is-visible.service';
import { CanvaOpenService } from 'src/app/canva-open.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-cover-green',
  templateUrl: './cover-green.component.html',
  styleUrls: ['./cover-green.component.css'],
})
export class CoverGreenComponent implements OnInit {
  public mainManuVisible: boolean = false;
  public currentStyleIndex: number = 0;
  public styles: string[] = ['styleGreen', 'styleBlue'];
  scrollY: number = 0;
  scrollYInner: number = 0;
  delta: number = 0;
  canvaOpen?: boolean;
  public imagesIzbornik: string[] = [
    '../../../assets/blueIzbornik.svg',
    '../../../assets/greenIzbornik.svg',
  ];
  public currentImageIndex: number = 0;

  public imagesArrow: string[] = [
    '../../../assets/blueStrelica.svg',
    '../../../assets/greenStrelica.svg',
  ];
  public currentArrowIndex: number = 0;
  spliTech2024 = this.$service.spliTech2024;
  spliTech2023 = this.$service.spliTech2023;

  canvasHeight?: string;
  canvasHeigthNumber?: number;

  constructor(
    public $service: MainServiceService,
    public $isVisible: IsVisibleService,
    public $canvaOpen: CanvaOpenService,
    private elementRef: ElementRef
  ) {}
  ngOnInit() {
    // variable from CSS
    const hostElement = this.elementRef.nativeElement;
    this.canvasHeight =
      getComputedStyle(hostElement).getPropertyValue('--canvas-height');
    this.canvasHeigthNumber = parseInt(this.canvasHeight);
    console.log(this.canvasHeigthNumber)
    this.animationFunction();
    this.$canvaOpen.get().subscribe((value) => {
      setTimeout(() => {
        console.log("canva open triggered with value: " + value)
        this.canvaOpen = value;
        this.hamburger()
      }, 100);

    });
    
  }
  toggleVisible() {
    this.$isVisible.toggleVisible();
  }
  onlyBlueApperance() {
    this.currentArrowIndex = 1;
    this.currentStyleIndex = 1;
    this.currentImageIndex = 1;
  }
  animationFunction() {
    let intervalId: any;

    const changeAppearance = () => {
      this.currentArrowIndex =
        (this.currentArrowIndex + 1) % this.imagesArrow.length;
      this.currentStyleIndex =
        (this.currentStyleIndex + 1) % this.styles.length;
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imagesIzbornik.length;
    };

    intervalId = setInterval(changeAppearance, 3000);

    document.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.delta = event.deltaY;
        this.scrollY += event.deltaY;
        this.scrollYInner += event.deltaY;
        this.myMove();
        document.getElementById('canvas')!.style.height =
          Math.floor(this.scrollY / 2) + 'px';

        //animation on 9 and title of conference
        const mainContent = document.getElementById('mainContent');
        mainContent!.style.transform = `scale(${this.scrollY / 400})`;

        if (this.scrollY === 0) {
          clearInterval(intervalId);
          intervalId = setInterval(changeAppearance, 3000);
        } 
        // else if (this.scrollY >= 30) {
        //   this.stepOne();
        // } 
        else {
          this.onlyBlueApperance();
          clearInterval(intervalId);
        }
      },
      { passive: false }
    );
  }

  myMove() {
    if (this.canvasHeigthNumber) {
      let contentId = document.getElementById('contentId');
      let canvasInnerHeight = contentId?.clientHeight;

      if (this.scrollY < 0) {
        this.scrollY = 0;
      } else if (this.scrollY > this.canvasHeigthNumber) {
        this.scrollY = this.canvasHeigthNumber;
        let canvas = document.getElementById('canvas');
        canvas!.scrollTop = this.scrollYInner - this.canvasHeigthNumber!;
        // setTimeout(()=>{
        //   canvas!.scrollTop = this.scrollYInner - this.canvasHeigthNumber!;
        // },1000)
      } else if (this.delta < 0) {
        /**if we have scrollUp */
        const canvas = document.getElementById('canvas');
        if (canvas!.scrollTop === 0) {
          this.scrollY;
        } else {
          this.scrollY = this.canvasHeigthNumber;
          let canvas = document.getElementById('canvas');
          canvas!.scrollTop = this.scrollYInner - this.canvasHeigthNumber;
        }
      } else if (
        /*prevent infinity scrolling*/
        this.scrollYInner >=
        this.canvasHeigthNumber + canvasInnerHeight!
      ) {
        this.scrollYInner = this.canvasHeigthNumber + canvasInnerHeight! + 500;
      } else {
        this.scrollY;
        let canvas = document.getElementById('canvas');
        canvas!.scrollTop = this.scrollYInner - this.canvasHeigthNumber;
      }
    }
  }

  hamburger() {
    console.log("called hamburger")
    console.log(this.canvasHeigthNumber)
    if (this.canvaOpen) {
      let canvas = document.getElementById('canvas');
      let contentId = document.getElementById('contentId');
      // this.onlyBlueApperance();
      if (canvas) {
        canvas.style.height! = (this.canvasHeigthNumber! /2).toString() + "px";
        this.scrollY != this.canvasHeigthNumber + 1
        this.scrollYInner != this.canvasHeigthNumber + 1
        if (contentId) {
          canvas!.scrollTop = this.scrollYInner - this.canvasHeigthNumber;
        }
      }
      console.log('evo me u cover green');
    }
  }

  stepOne() {
    let mainContent = document.getElementById('mainContent');
    mainContent!.style.display = 'static';
  }
  stepTwo() {
    let contentId = document.getElementById('contentId');
    contentId!.style.opacity = '1';
  }
}
