import { TestBed } from '@angular/core/testing';

import { GoogleMapaServiceService } from './google-mapa-service.service';

describe('GoogleMapaServiceService', () => {
  let service: GoogleMapaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
