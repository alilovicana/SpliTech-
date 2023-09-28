import { Component, HostListener } from '@angular/core';

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
    const totalHeight = document.body.clientHeight;

    if (this.coverGreen && this.coverBlue && this.heroPage) {
      if ( scrollY >= viewportHeight && scrollY <= totalHeight - viewportHeight)
       {
        this.coverGreen.style.opacity = '0';
        this.coverBlue.style.display = 'block';
        this.heroPage.style.display = 'none'; 
      } else if (scrollY > totalHeight - viewportHeight) {
       
        this.coverGreen.style.opacity = '0';
        this.coverBlue.style.display = 'none'; 
        this.heroPage.style.display = 'block';
      } else {
        this.coverGreen.style.opacity = '1';
        this.coverBlue.style.display = 'none';
        this.heroPage.style.display = 'none';
      }
      console.log(this.heroPage)
    }
  }
}
