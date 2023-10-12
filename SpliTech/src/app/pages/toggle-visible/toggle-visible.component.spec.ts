import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleVisibleComponent } from './toggle-visible.component';

describe('ToggleVisibleComponent', () => {
  let component: ToggleVisibleComponent;
  let fixture: ComponentFixture<ToggleVisibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleVisibleComponent]
    });
    fixture = TestBed.createComponent(ToggleVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
