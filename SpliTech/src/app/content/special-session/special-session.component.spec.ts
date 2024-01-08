import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSessionComponent } from './special-session.component';

describe('SpecialSessionComponent', () => {
  let component: SpecialSessionComponent;
  let fixture: ComponentFixture<SpecialSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialSessionComponent]
    });
    fixture = TestBed.createComponent(SpecialSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
