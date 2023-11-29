import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseService {
  constructor() {}
  isVisible: boolean = false;
  isCoverOpen = false;

  toggleVisible() {
    this.isVisible = !this.isVisible;
  }

  elementsOrder = [
    'title',
    'important_dates',
    'committee',
    'location',
    'accomodation',
    'registration',
    'organization',
    'contact',
    'cfp'
  ];
  
  currentElement = 0;

  elements = {
    title: true,
    accomodation: false,
    chairs: false,
    committee: false,
    contact: false,
    important_dates: false,
    location: false,
    organization: false,
    registration: false,
    cfp:false
  };

  current = 'title';
  working = false;

  show(element) {
    this.currentElement = this.elementsOrder.indexOf(element);
    console.log('currentElement'+ this.currentElement)
    if (this.working) return;
    this.working = true;
    this.elements[this.current] = false;
    setTimeout(() => {
      this.elements[element] = true;
      this.current = element;
      this.working = false;
      document.getElementById("canvas").scrollTop = 0;
    }, 600);
  }
}
