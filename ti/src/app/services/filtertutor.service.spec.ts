import { TestBed } from '@angular/core/testing';

import { FiltertutorService } from './filtertutor.service';

describe('FiltertutorService', () => {
  let service: FiltertutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltertutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
