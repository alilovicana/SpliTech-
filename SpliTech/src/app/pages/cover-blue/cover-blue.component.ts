import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
@Component({
  selector: 'app-cover-blue',
  templateUrl: './cover-blue.component.html',
  styleUrls: ['./cover-blue.component.css']
})
export class CoverBlueComponent {
  constructor(public $service:MainServiceService){

  }
  spliTech2023=this.$service.spliTech2023;
spliTech2024=this.$service.spliTech2024;

}
