import { Component, OnInit, HostListener } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { IsVisibleService } from 'src/app/is-visible.service';
import { CanvaOpenService } from 'src/app/canva-open.service';

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
  constructor(
    public $service: MainServiceService,
    public $isVisible: IsVisibleService,
    public $canvaOpen: CanvaOpenService
  ) {}
  ngOnInit() {
    this.animationFunction();
  }
  toggleVisible() {
    this.$isVisible.toggleVisible();
  }
  spliTech2024 = this.$service.spliTech2024;
  spliTech2023 = this.$service.spliTech2023;

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
          Math.floor(this.scrollY / 10) + 'px';

        //animation on 9 and title of conference
        const mainContent = document.getElementById('mainContent');
        mainContent!.style.transform = `scale(${this.scrollY/1700})`;

        if (this.scrollY === 0) {
          clearInterval(intervalId);
          intervalId = setInterval(changeAppearance, 3000);
        } else {
          this.onlyBlueApperance();
          clearInterval(intervalId);
        }
      },
      { passive: false }
    );
  }

  myMove() {
    if (this.scrollY < 0) {
      this.scrollY = 0;
    } else if (this.scrollY > canvasHeight) {
      this.scrollY = canvasHeight;
      let canvas = document.getElementById('canvas');
      canvas!.scrollTop =this.scrollYInner - canvasHeight;
    }
    //  else if ( this.$canvaOpen.canvaOpen==true) {
    //   this.scrollY=canvasHeight;
    //   let canvas = document.getElementById('canvas');
    //   canvas!.scrollTop =10000;
    //   setTimeout(() => {
    //     //@ts-ignore
    //     document.getElementById('contentId').scrollIntoView();
    //   }, 100);
    //   console.log('evo me u cover green');
    // } 
    else if (this.delta < 0) {
      const canvas = document.getElementById('canvas');
      if (canvas!.scrollTop === 0) {
        this.scrollY;
      } else {
        this.scrollY = canvasHeight;
        let canvas = document.getElementById('canvas');
        canvas!.scrollTop =this.scrollYInner - canvasHeight;
      }
    } else {
      this.scrollY;
      let canvas = document.getElementById('canvas');
      canvas!.scrollTop =this.scrollYInner - canvasHeight;
    }
  }
}
