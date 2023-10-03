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
  private heroPage?: HTMLElement;
  private mainManu?: HTMLElement;
  title = 'SpliTech';
  constructor() {}

  ngOnInit() {
    AOS.init();
    this.coverGreen = document.querySelector('app-cover-green') as HTMLElement;
    this.coverBlue = document.querySelector('app-cover-blue') as HTMLElement;
    this.heroPage = document.querySelector('app-hero-page') as HTMLElement;
    this.mainManu = document.querySelector('app-main-manu') as HTMLElement;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

    if(this.coverBlue&& this.coverGreen){
      if(scrollY>=viewportHeight && scrollY<=totalHeight-(viewportHeight+viewportHeight)){
        this.coverGreen.style.opacity='0';
        this.coverBlue.style.display='block';///////coverBlue
        this.coverBlue.style.position='sticky';
      }
      else{
        this.coverGreen.style.opacity='1';
        this.coverGreen.style.position='sticky';///////coverGreen
        this.coverBlue.style.display='none';
      }
    }
  }
}
