import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfpComponent } from './cfp.component';

describe('CfpComponent', () => {
  let component: CfpComponent;
  let fixture: ComponentFixture<CfpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CfpComponent]
    });
    fixture = TestBed.createComponent(CfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
