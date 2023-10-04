import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private coverGreen?: HTMLElement;
  private coverOneBlue?: HTMLElement;
  private coverBlue?: HTMLElement;
  private heroPage?: HTMLElement;
  private mainManu?: HTMLElement;
  private goFor?:HTMLElement;
  private future?:HTMLElement;
  private secondLine?: HTMLElement;
  title = 'SpliTech';
  constructor() {}

  ngOnInit() {
    AOS.init();
    this.coverGreen = document.querySelector('app-cover-green') as HTMLElement;
    this.coverOneBlue = document.querySelector('app-cover-blue-one') as HTMLElement;
    this.coverBlue = document.querySelector('app-cover-blue') as HTMLElement;
    this.heroPage = document.querySelector('app-hero-page') as HTMLElement;
    this.mainManu = document.querySelector('app-main-manu') as HTMLElement;
    this.goFor=document.getElementById('goFor') as HTMLElement;
    this.future=document.getElementById('future') as HTMLElement;
    this.secondLine= document.getElementById('secondLine') as HTMLElement;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

    if(this.coverBlue&& this.coverOneBlue&& this.coverGreen&&this.heroPage&&this.mainManu && this.goFor &&this.future && this.secondLine){
      if(scrollY>=viewportHeight && scrollY<=totalHeight-(viewportHeight*3)){
        this.coverGreen.style.opacity='0';
        this.heroPage.style.opacity='0';
        this.mainManu.style.opacity='0';
        this.coverBlue.style.opacity='0';
        this.coverOneBlue.style.opacity='1';///////coverOneBlue
        this.coverOneBlue.style.position='sticky';
       console.log('oneBlue');
       console.log(scrollY)
     }else if(scrollY>viewportHeight*2 && scrollY<totalHeight-(viewportHeight*2)){
         this.coverGreen.style.opacity='0';
         this.heroPage.style.opacity='0';
         this.mainManu.style.opacity='0';
         this.coverOneBlue.style.opacity='0';
         this.coverBlue.style.opacity='1';///////coverBlue
         this.coverBlue.style.position='sticky';
         if(scrollY>viewportHeight*2 && scrollY<totalHeight-(viewportHeight*2)){
          this.goFor.style.transform = `translateY(-${scrollY-2500}px)`;
          this.future.style.transform = `translateY(${scrollY-1800}px)`;
          this.secondLine.style.opacity = '0.2';
         }
        console.log('blue');
        console.log(scrollY);
      }else if(scrollY>viewportHeight*3 && scrollY<totalHeight-viewportHeight){
         this.coverGreen.style.opacity='0';
         this.coverBlue.style.opacity='0';
         this.coverOneBlue.style.opacity='0';
         this.heroPage.style.opacity='1';///////heroPage
         this.mainManu.style.opacity='1';
         this.heroPage.style.position='sticky'
        console.log('hero');
      }else if(scrollY>=viewportHeight*4 && scrollY<=totalHeight){
        this.coverOneBlue.style.opacity='0';
         this.coverGreen.style.opacity='0';
         this.coverBlue.style.opacity='0';///////mainManu
         this.heroPage.style.opacity='0';
         this.mainManu.style.opacity='1';
        
        console.log('main');
      }
      else{
         this.coverGreen.style.opacity='1';
         this.coverOneBlue.style.opacity='0';
         this.coverBlue.style.opacity='0';
         this.heroPage.style.opacity='0';
         this.mainManu.style.opacity='0';
         this.coverGreen.style.position='sticky';///////coverGreen
        console.log('green');
      }
    }
  }
}
