import { Component, OnInit,HostListener, Renderer2, ElementRef} from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
@Component({
  selector: 'app-cover-blue',
  templateUrl: './cover-blue.component.html',
  styleUrls: ['./cover-blue.component.css'],
})
export class CoverBlueComponent {

  viewportHeight?: number;
  scrollY?:number; 
  constructor(public $service: MainServiceService, private renderer: Renderer2, private el: ElementRef) {
    this.viewportHeight = window.innerHeight;
  }
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event) {
    const scrollY = window.scrollY;
 
  }
}
