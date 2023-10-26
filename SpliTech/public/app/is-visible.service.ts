import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsVisibleService {
  constructor() {}
  isVisible: boolean = false;

  toggleVisible() {
    this.isVisible = !this.isVisible;
  }
  
}
