import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverBlueComponent } from './cover-blue.component';

describe('CoverBlueComponent', () => {
  let component: CoverBlueComponent;
  let fixture: ComponentFixture<CoverBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverBlueComponent]
    });
    fixture = TestBed.createComponent(CoverBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
