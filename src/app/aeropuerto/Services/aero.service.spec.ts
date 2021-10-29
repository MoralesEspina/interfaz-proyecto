import { TestBed } from '@angular/core/testing';

import { AeroService } from './aero.service';

describe('AeroService', () => {
  let service: AeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
