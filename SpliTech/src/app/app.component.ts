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
  private playGroundPage?: HTMLElement;
  private contentPage?: HTMLElement;
  title = 'SpliTech';
  constructor() {
  }

  ngOnInit() {
    AOS.init();
    this.coverGreen = document.querySelector('app-cover-green') as HTMLElement;
    this.coverBlue = document.querySelector('app-cover-blue') as HTMLElement;
    this.heroPage = document.querySelector('app-hero-page') as HTMLElement;
    this.playGroundPage = document.querySelector(
      'app-play-ground-page'
    ) as HTMLElement;
    this.contentPage = document.querySelector(
      'app-content-page'
    ) as HTMLElement;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

    // if (
    //   this.coverGreen &&
    //   this.coverBlue &&
    //   this.heroPage &&
    //   this.playGroundPage &&
    //   this.contentPage
    // ) {
    //   if (
    //     scrollY >= viewportHeight &&
    //     scrollY <= totalHeight - viewportHeight * 3
    //   ) {
    //     this.coverGreen.style.opacity = '0';
    //     this.coverBlue.style.opacity = 'block'; ///////coverBlue
    //     this.heroPage.style.display = 'none';
    //     this.playGroundPage.style.display = 'none';
    //     this.contentPage.style.display = 'none';
    //   } else if (
    //     scrollY > viewportHeight * 2 &&
    //     scrollY <totalHeight - (viewportHeight * 2)
    //   ) {
    //     this.coverGreen.style.opacity = '0';
    //     this.coverBlue.style.display = 'none'; ///////heroPage
    //     this.heroPage.style.display = 'block';
    //     this.playGroundPage.style.display = 'none';
    //     this.contentPage.style.display = 'none';
    //   } else if (
    //     scrollY >= viewportHeight * 3 &&
    //     scrollY <= totalHeight - viewportHeight
    //   ) {
    //     this.coverGreen.style.opacity = '0';
    //     this.coverBlue.style.display = 'none'; ///////playgroundPage
    //     this.heroPage.style.display = 'none';
    //     this.playGroundPage.style.display = 'block';
    //     this.contentPage.style.display = 'none';
    //   } else if (scrollY > viewportHeight * 4 && scrollY < totalHeight) {
    //     this.coverGreen.style.opacity = '0';
    //     this.coverBlue.style.display = 'none'; ///////contentPage
    //     this.heroPage.style.display = 'none';
    //     this.playGroundPage.style.display = 'none';
    //     this.contentPage.style.display = 'block';
    //   } else {
    //     this.coverGreen.style.opacity = '1';
    //     this.coverBlue.style.display = 'none'; ///////coverGreen
    //     this.heroPage.style.display = 'none';
    //     this.playGroundPage.style.display = 'none';
    //     this.contentPage.style.display = 'none';
    //   }
    // }


    /***************************/
    if(this.coverBlue&& this.coverGreen){
      if(scrollY>=viewportHeight){
        this.coverGreen.style.opacity='0';
        this.coverBlue.style.display='block';
        console.log('total'+totalHeight);
      }
      else{
        this.coverGreen.style.opacity='1';
        this.coverBlue.style.display='none';
      }
    }
  }
}
