import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanvaOpenService {

  private canvaOpen = new BehaviorSubject<boolean>(false);
  constructor() {}
  set(variable: boolean) {
    this.canvaOpen.next(variable);
  }

  get(): Observable<boolean> {
    return this.canvaOpen.asObservable();
  }
}
