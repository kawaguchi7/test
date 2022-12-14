import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPadComponent } from './action-pad.component';

describe('ActionPadComponent', () => {
  let component: ActionPadComponent;
  let fixture: ComponentFixture<ActionPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
