import { Component} from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {
  constructor(public $service:MainServiceService){}

 
  spliTech2023=this.$service.spliTech2023;
  spliTech2024=this.$service.spliTech2024;
}
