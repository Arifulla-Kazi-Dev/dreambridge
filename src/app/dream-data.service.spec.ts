import { TestBed } from '@angular/core/testing';

import { DreamDataService } from './dream-data.service';

describe('DreamDataService', () => {
  let service: DreamDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreamDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
