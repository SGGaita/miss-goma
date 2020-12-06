import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestantCreateComponent } from './admin-contestant-create.component';

describe('AdminContestantCreateComponent', () => {
  let component: AdminContestantCreateComponent;
  let fixture: ComponentFixture<AdminContestantCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContestantCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContestantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
