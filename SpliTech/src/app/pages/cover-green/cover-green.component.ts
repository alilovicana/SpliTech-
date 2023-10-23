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
  scrollY: number=0;

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
    setInterval(() => {
      this.currentArrowIndex =
        (this.currentArrowIndex + 1) % this.imagesArrow.length;
      this.currentStyleIndex =
        (this.currentStyleIndex + 1) % this.styles.length;
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imagesIzbornik.length;
    }, 3000);
    this.animationFunction();
  }
  toggleVisible() {
    this.$isVisible.toggleVisible();
  }
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;
  animationFunction() {
    document.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.scrollY += event.deltaY;
        console.log("Delta: " + event.deltaY);
        console.log("ScrollY: " + this.scrollY);
        this.scrollY = this.scrollY < 0 ? 0 : this.scrollY > 5000 ? 5000 : this.scrollY;
        document.getElementById("canvas")!.style.height = Math.floor(this.scrollY / 10) + "px"
        // this.myMove();
      },
      { passive: false}
    );
  }
  myMove() {
    let id: any = null;
    const elem = document.getElementById('canvas');
    let pos = 0;

    if (elem) {
      clearInterval(id);
      if (scrollY == 2300) {
        clearInterval(id);
        pos = 0; ///kraj animacije
      } else if (scrollY <=10) {
        pos++;
        if (elem) {
          elem.style.height = '100vh'; //razmak
          elem.style.backgroundColor = 'yellow';
        }
      } else if ( scrollY > 10) {
        pos++;
        if (elem) {
          elem.style.height = '1vh'; //dolazak 9
        }
      } else if (scrollY <=-1) {
        pos++;
        if (elem) {
          elem.style.height = '10vh'; //dolazak contenta
        }
      }
    } else {
      console.error("Element 'canvas' not found.");
    }
  }
}
