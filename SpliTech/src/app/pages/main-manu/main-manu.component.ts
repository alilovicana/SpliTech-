import { Component, OnInit } from '@angular/core';
import { IsVisibleService } from 'src/app/is-visible.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanvaOpenService } from 'src/app/canva-open.service';
import { ShowcaseService } from 'src/app/showcase.service';

@Component({
  selector: 'app-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.css'],
})
export class MainManuComponent {
  
  constructor(
    public $isNotVisible: IsVisibleService,
    public router: Router,
    public $canvaOpen: CanvaOpenService,
    public $activatedRoute : ActivatedRoute,
    public $showcase : ShowcaseService
  ) {
}
  navigateTo(path: string) {

    this.$showcase.show(path)
    this.$isNotVisible.toggleVisible()
  }
}
