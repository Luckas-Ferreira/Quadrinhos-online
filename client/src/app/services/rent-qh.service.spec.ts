import { TestBed } from '@angular/core/testing';

import { RentQHService } from './rent-qh.service';

describe('RentQHService', () => {
  let service: RentQHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentQHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
