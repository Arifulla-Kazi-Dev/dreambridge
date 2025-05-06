import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamShowcaseComponent } from './dream-showcase.component';

describe('DreamShowcaseComponent', () => {
  let component: DreamShowcaseComponent;
  let fixture: ComponentFixture<DreamShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
