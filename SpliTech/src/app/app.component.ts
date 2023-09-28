import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private coverGreen?: HTMLElement;
  private coverBlue?: HTMLElement;
  private heroPage?: HTMLElement;
  title = 'SpliTech';
  constructor() {}

  ngOnInit() {
    this.coverGreen = document.querySelector('app-cover-green') as HTMLElement;
    this.coverBlue = document.querySelector('app-cover-blue') as HTMLElement;
    this.heroPage = document.querySelector('app-hero-page') as HTMLElement;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (this.coverGreen && this.coverBlue && this.heroPage) {
    //   const opacityGreen = Math.min(1, Math.max(0, 0.8 - scrollY / viewportHeight));
    // const opacityBlue = Math.min(1, Math.max(0, 0.2 + scrollY / viewportHeight));

    // this.coverGreen.style.opacity = opacityGreen.toString();
    // this.coverBlue.style.opacity = opacityBlue.toString();
     if(scrollY >= viewportHeight){
        this.coverGreen.style.opacity = '0'; 
        this.coverBlue.style.display = 'block'; 
      }
      else{
        this.coverGreen.style.opacity = '1'; 
        this.coverBlue.style.display = 'none'; 
      }
      
    }
  }
}

