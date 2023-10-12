import { Component } from '@angular/core';
import { IsVisibleService } from 'src/app/is-visible.service';

@Component({
  selector: 'app-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.css'],
})
export class MainManuComponent {
  constructor(public $isNotVisible: IsVisibleService) {}
  
}
