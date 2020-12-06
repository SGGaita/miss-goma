import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestantComponent } from './admin-contestant.component';

describe('AdminContestantComponent', () => {
  let component: AdminContestantComponent;
  let fixture: ComponentFixture<AdminContestantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContestantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
