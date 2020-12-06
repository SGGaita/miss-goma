import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestantsListComponent } from './admin-contestants-list.component';

describe('AdminContestantsListComponent', () => {
  let component: AdminContestantsListComponent;
  let fixture: ComponentFixture<AdminContestantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContestantsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContestantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
