import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTipComponent } from './academy-tip.component';

describe('AcademyTipComponent', () => {
  let component: AcademicTipComponent;
  let fixture: ComponentFixture<AcademicTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicTipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
