import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private coverGreen?: HTMLElement;
  private coverBlue?: HTMLElement;
  private mainComponent?: HTMLElement;
  private mainManu?: HTMLElement;

  private goFor?: HTMLElement;
  private future?: HTMLElement;
  private secondLine?: HTMLElement;
  private logo?: HTMLElement;
  title = 'SpliTech';
  constructor() {}

  ngOnInit() {
    AOS.init();
    this.coverGreen = document.querySelector('app-cover-green') as HTMLElement;
    this.coverBlue = document.querySelector('app-cover-blue') as HTMLElement;
    this.mainComponent = document.querySelector(
      'app-main-compnent'
    ) as HTMLElement;
    this.mainManu = document.querySelector('app-main-manu') as HTMLElement;

    this.goFor = document.getElementById('goFor') as HTMLElement;
    this.future = document.getElementById('future') as HTMLElement;
    this.secondLine = document.getElementById('secondLine') as HTMLElement;
    this.logo = document.getElementById('logo') as HTMLElement;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    let firstLine = 1910;
    let secondLine=2865;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

    if (
      this.coverGreen &&
      this.coverBlue &&
      this.mainComponent &&
      this.mainManu &&
      this.goFor &&
      this.future &&
      this.secondLine &&
      this.logo
    ) {
      if (
        scrollY >= viewportHeight &&
        scrollY <= totalHeight - viewportHeight 
      ) {
        if (
          scrollY >= viewportHeight &&
          scrollY <= totalHeight - viewportHeight * 2
        ) {
          this.mainComponent.style.opacity = '1';
          this.coverGreen.style.opacity = '0'; ///////coverBlue
          this.mainManu.style.opacity = '0';
          this.coverBlue.style.opacity = '1';
          this.coverBlue.style.position = 'sticky';
          this.secondLine.style.opacity = '1';
          this.logo.style.opacity = '1';
        } else {
            this.mainComponent.style.opacity = '1';
            this.coverGreen.style.opacity = '0';
            this.mainManu.style.opacity = '0';
            this.coverBlue.style.opacity = '1';
            this.coverBlue.style.position = 'sticky';
            this.goFor.classList.add('windowAnimationGoFor');
            this.future.classList.add('windowAnimationFuture'); //scrollDown
            this.secondLine.style.opacity = '0';
            this.logo.style.opacity = '0';
            this.goFor.style.position='sticky';
            this.future.style.position='sticky';
        }
    
      } else if (scrollY >= 0 && scrollY < totalHeight - viewportHeight * 3) {
        this.coverGreen.style.opacity = '1';
        this.mainManu.style.opacity = '0';
        this.mainComponent.style.opacity = '0';
        this.coverBlue.style.opacity = '0';
        this.coverGreen.style.position = 'sticky'; ///////coverGreen
      } else {
        this.coverGreen.style.opacity = '0';
        this.mainManu.style.opacity = '1';
        this.mainComponent.style.opacity = '1';
        this.coverBlue.style.opacity = '0';
      }
    }
  }
}
