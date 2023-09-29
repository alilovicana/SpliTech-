import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {
  constructor(public $service:MainServiceService){

  }
  spliTech2023=this.$service.spliTech2023;
  spliTech2024=this.$service.spliTech2024;
}
