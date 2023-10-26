import { Component, OnInit } from '@angular/core';
import { IsVisibleService } from 'src/app/is-visible.service';
import { Router } from '@angular/router';
import { CanvaOpenService } from 'src/app/canva-open.service';

@Component({
  selector: 'app-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.css'],
})
export class MainManuComponent implements OnInit{
  constructor(
    public $isNotVisible: IsVisibleService,
    public router: Router,
    public $canvaOpen: CanvaOpenService
  ) {}
  ngOnInit(): void {
    this.$canvaOpen.canvaOpen=false;
    console.log('openCanvas', this.$canvaOpen.canvaOpen)
  }
  scrollToAnchor(contentId: string) {
    const element = document.getElementById(contentId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    console.log(element);
  }
  canvaOpenFunction() {
    document.getElementById('canvas')!.style.height =
      Math.floor(7000 / 10) + 'px';
  }
  navigateTo(path: string) {
    if (this.$isNotVisible.isVisible) {
      this.router.navigate([path]).then(() => {
        this.$isNotVisible.toggleVisible();
        this.$canvaOpen.canvaOpen = true;
        console.log('openCanvas', this.$canvaOpen.canvaOpen)
      });
     
    }
  }
}
