import { TestBed } from '@angular/core/testing';

import { ArtikestammApiService } from './artikestamm-api.service';

describe('ArtikestammApiService', () => {
  let service: ArtikestammApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikestammApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
