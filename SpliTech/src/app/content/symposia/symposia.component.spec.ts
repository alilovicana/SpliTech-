import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiaComponent } from './symposia.component';

describe('SymposiaComponent', () => {
  let component: SymposiaComponent;
  let fixture: ComponentFixture<SymposiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymposiaComponent]
    });
    fixture = TestBed.createComponent(SymposiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
