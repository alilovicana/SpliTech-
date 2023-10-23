import { Component, OnInit, HostListener } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { IsVisibleService } from 'src/app/is-visible.service';

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
    public $isVisible: IsVisibleService
  ) {}
  ngOnInit() {
    this.animationFunction();
  }
  toggleVisible() {
    this.$isVisible.toggleVisible();
  }
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;

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
        this.scrollY += event.deltaY;
        console.log('Delta: ' + event.deltaY);
        console.log('ScrollY: ' + this.scrollY);
        this.myMove();
        // this.scrollY =
        //   this.scrollY < 0 ? 0 : this.scrollY > 7000 ? 7000 : this.scrollY;
        document.getElementById('canvas')!.style.height =
          Math.floor(this.scrollY / 10) + 'px';

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
    } else if (this.scrollY > 7000) {
      this.scrollY = 7000;
    } else {
      this.scrollY;
    }
  }
}
