import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestantsComponent } from './admin-contestants.component';

describe('AdminContestantsComponent', () => {
  let component: AdminContestantsComponent;
  let fixture: ComponentFixture<AdminContestantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContestantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContestantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
