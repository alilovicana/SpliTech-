import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { IsVisibleService } from './is-visible.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public scrollY?: number=0;
  public viewportHeight?:number;
  title = 'SpliTech';
  public isVisible?: boolean;
  constructor(public $isVisible: IsVisibleService) {
    this.viewportHeight = window.innerHeight;
  }

  ngOnInit() {
    AOS.init();
    this.isVisible = this.$isVisible.isVisible;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrollY = window.scrollY;
  }
}
