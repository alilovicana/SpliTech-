import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { IsVisibleService } from './is-visible.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private goFor?: HTMLElement;
  private future?: HTMLElement;
  private secondLine?: HTMLElement;
  private logo?: HTMLElement;
  title = 'SpliTech';
  public isVisible?:boolean;
  constructor( public $isVisible:IsVisibleService) {}

  ngOnInit() {
    AOS.init();
    this.goFor = document.getElementById('goFor') as HTMLElement;
    this.future = document.getElementById('future') as HTMLElement;
    this.secondLine = document.getElementById('secondLine') as HTMLElement;
    this.logo = document.getElementById('logo') as HTMLElement;


    this.isVisible=this.$isVisible.isVisible;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    let firstLine = 1910;
    let secondLine=2865;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

  }
}
