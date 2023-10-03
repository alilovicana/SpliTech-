import { Component, HostListener, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent implements OnInit {
  public mainContent?: HTMLElement;
  public mainContentPlayGround?: HTMLElement;
  public mainContentContent?: HTMLElement;

  constructor(public $service: MainServiceService) {}
  spliTech2023 = this.$service.spliTech2023;
  spliTech2024 = this.$service.spliTech2024;


  ngOnInit(): void {
      this.mainContent=document.querySelector('mainContent')as HTMLElement;
      this.mainContentPlayGround = document.querySelector('.mainContentPlayGround') as HTMLElement;
      this.mainContentContent = document.querySelector('.mainContentContent') as HTMLElement;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

    if(this.mainContent&& this.mainContentPlayGround){
        if(scrollY>=viewportHeight/2){
          this.mainContent.style.opacity='0';
          this.mainContentPlayGround.style.display='block';
        }
        else{
          this.mainContent.style.opacity='1';
          this.mainContentPlayGround.style.display='none';
        }
      }
  }
}
