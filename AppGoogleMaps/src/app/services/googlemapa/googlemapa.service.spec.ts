import { TestBed } from '@angular/core/testing';

import { GooglemapaService } from './googlemapa.service';

describe('GooglemapaService', () => {
  let service: GooglemapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglemapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
