import { Component, Input } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
@Component({
  selector: 'app-main-compnent',
  templateUrl: './main-compnent.component.html',
  styleUrls: ['./main-compnent.component.css']
})
export class MainCompnentComponent {
  constructor(public $service: MainServiceService) {}
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;
}
