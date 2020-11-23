import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitonComponent } from './competiton.component';

describe('CompetitonComponent', () => {
  let component: CompetitonComponent;
  let fixture: ComponentFixture<CompetitonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
