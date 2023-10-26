import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverGreenComponent } from './cover-green.component';

describe('CoverGreenComponent', () => {
  let component: CoverGreenComponent;
  let fixture: ComponentFixture<CoverGreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverGreenComponent]
    });
    fixture = TestBed.createComponent(CoverGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
