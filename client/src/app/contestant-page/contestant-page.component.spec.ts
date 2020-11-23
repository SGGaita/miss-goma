import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantPageComponent } from './contestant-page.component';

describe('ContestantPageComponent', () => {
  let component: ContestantPageComponent;
  let fixture: ComponentFixture<ContestantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
