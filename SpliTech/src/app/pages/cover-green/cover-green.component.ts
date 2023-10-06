import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-cover-green',
  templateUrl: './cover-green.component.html',
  styleUrls: ['./cover-green.component.css'],
})
export class CoverGreenComponent {
  public mainManuVisible: boolean = false;
  constructor(public $service: MainServiceService) {}

  openMainManu() {
    this.mainManuVisible = !this.mainManuVisible;
  }
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;
}
