import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private coverGreen?: HTMLElement;
  private mainComponent?:HTMLElement;
  private mainManu?: HTMLElement;

  private goFor?:HTMLElement;
  private future?:HTMLElement;
  private secondLine?: HTMLElement;
  public content: boolean=true; 
  title = 'SpliTech';
  constructor() {}

  ngOnInit() {
    AOS.init();
    this.coverGreen = document.querySelector('app-cover-green') as HTMLElement;
    this.mainComponent = document.querySelector('app-main-compnent') as HTMLElement;
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
 

    if( this.coverGreen&&this.mainComponent&&this.mainManu&& this.goFor &&this.future && this.secondLine){
      if(scrollY>=viewportHeight && scrollY<totalHeight-viewportHeight){
      
        this.coverGreen.style.opacity='0';
        this.mainManu.style.opacity='1';
        this.mainComponent.style.opacity='1';///////mainComponent
        this.mainComponent.style.position='sticky';
        if(scrollY>=viewportHeight*5/3 && scrollY<totalHeight-viewportHeight){
          this.goFor.style.transform = `translateY(-${scrollY-1800}px)`;
          this.future.style.transform = `translateY(${scrollY-1600}px)`;
          // if(scrollY<=totalHeight-viewportHeight){
          // this.goFor.style.position='sticky';
          // this.future.style.position='sticky';
          // }
        }
       console.log('mainComponent');
       console.log(scrollY)
     }
     else if(scrollY>=viewportHeight*2 && scrollY<=totalHeight){
        this.mainComponent.style.opacity='0';
         this.coverGreen.style.opacity='0';///////mainManu
         this.mainManu.style.opacity='1';
        console.log('main');
      }
      else{
         this.coverGreen.style.opacity='1';
         this.mainManu.style.opacity='0';
         this.mainComponent.style.opacity='0';
         this.coverGreen.style.position='sticky';///////coverGreen
        console.log('green');
      }
    }
  }
}
