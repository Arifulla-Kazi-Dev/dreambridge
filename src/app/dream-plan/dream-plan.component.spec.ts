import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamPlanComponent } from './dream-plan.component';

describe('DreamPlanComponent', () => {
  let component: DreamPlanComponent;
  let fixture: ComponentFixture<DreamPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
