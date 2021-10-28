import { TestBed } from '@angular/core/testing';

import { CanvuelosService } from './canvuelos.service';

describe('CanvuelosService', () => {
  let service: CanvuelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvuelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
