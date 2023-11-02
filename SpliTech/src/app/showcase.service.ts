import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseService {
  constructor() {}
  isVisible: boolean = false;

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
    'organisation',
    'contact',
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
  };

  current = 'title';
  working = false;

  show(element) {
    this.currentElement = this.elementsOrder.indexOf(element);
    if (this.working) return;
    this.working = true;
    this.elements[this.current] = false;
    setTimeout(() => {
      this.elements[element] = true;
      this.current = element;
      this.working = false;
    }, 700);
  }
}
