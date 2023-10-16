import { Component, Input } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-compnent',
  templateUrl: './main-compnent.component.html',
  styleUrls: ['./main-compnent.component.css']
})
export class MainCompnentComponent {
  sectionName?: string;

  constructor(public $service: MainServiceService, private route: ActivatedRoute) {
    // this.sectionName = this.route.snapshot.data.sectionName;
    // console.log(this.sectionName);
  }
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;

 
 
}
