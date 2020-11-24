import { TestBed } from '@angular/core/testing';

import { ContestantsService } from './contestants.service';

describe('ContestantsService', () => {
  let service: ContestantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContestantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
