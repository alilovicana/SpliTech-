import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGroundPageComponent } from './play-ground-page.component';

describe('PlayGroundPageComponent', () => {
  let component: PlayGroundPageComponent;
  let fixture: ComponentFixture<PlayGroundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayGroundPageComponent]
    });
    fixture = TestBed.createComponent(PlayGroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
