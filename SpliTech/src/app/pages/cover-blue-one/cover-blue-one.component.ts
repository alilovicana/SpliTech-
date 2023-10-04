import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-cover-blue-one',
  templateUrl: './cover-blue-one.component.html',
  styleUrls: ['./cover-blue-one.component.css'],
})
export class CoverBlueOneComponent {
  constructor(public $service: MainServiceService) {}
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;
}
