import { TestBed } from '@angular/core/testing';

import { HaberserviceService } from './haberservice.service';

describe('HaberserviceService', () => {
  let service: HaberserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaberserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
