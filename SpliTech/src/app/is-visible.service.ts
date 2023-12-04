import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsVisibleService {
  constructor() {}
  isVisible: boolean = false;

  toggleVisible() {
    console.log("toggling")
    this.isVisible = !this.isVisible;
  }
  
}
