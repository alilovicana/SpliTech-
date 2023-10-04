import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompnentComponent } from './main-compnent.component';

describe('MainCompnentComponent', () => {
  let component: MainCompnentComponent;
  let fixture: ComponentFixture<MainCompnentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCompnentComponent]
    });
    fixture = TestBed.createComponent(MainCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
