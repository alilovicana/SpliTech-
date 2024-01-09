import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseService {
  constructor(
    public $zone : NgZone
  ) {}
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
    'symposia',
    'specialSession',
    'sponsors',
    'supporters',
    'contact',
    'cfp'
  ];
  
  currentElement = 0;

  elements = {
    title: true,
    important_dates: false,
    committee: false,
    location: false,
    accomodation: false,
    registration: false,
    organization: false,
    symposia:false,
    specialSesstion:false,
    sponsors:false,
    supporters:false,
    contact: false,
    cfp:false,
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
      this.$zone.run(() => {
        this.elements[element] = true;
        this.current = element;
        this.working = false;
        document.getElementById("canvas").scrollTop = 0;

        console.log(this.elements)
      })
    }, 1000);
  }
}
