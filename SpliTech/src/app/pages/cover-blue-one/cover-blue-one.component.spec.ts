import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverBlueOneComponent } from './cover-blue-one.component';

describe('CoverBlueOneComponent', () => {
  let component: CoverBlueOneComponent;
  let fixture: ComponentFixture<CoverBlueOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverBlueOneComponent]
    });
    fixture = TestBed.createComponent(CoverBlueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
