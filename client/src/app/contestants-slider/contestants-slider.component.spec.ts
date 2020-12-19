import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantsSliderComponent } from './contestants-slider.component';

describe('ContestantsSliderComponent', () => {
  let component: ContestantsSliderComponent;
  let fixture: ComponentFixture<ContestantsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestantsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
