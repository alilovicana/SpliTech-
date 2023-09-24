import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
@Component({
  selector: 'app-play-ground-page',
  templateUrl: './play-ground-page.component.html',
  styleUrls: ['./play-ground-page.component.css']
})
export class PlayGroundPageComponent {
constructor(public $service:MainServiceService){

}
spliTech2023=this.$service.spliTech2023;
spliTech2024=this.$service.spliTech2024;
}
