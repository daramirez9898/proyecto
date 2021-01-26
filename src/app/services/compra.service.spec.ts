import { TestBed } from '@angular/core/testing';

import { Compraservice } from './compra.service';

describe('Compraservice', () => {
  let service: Compraservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Compraservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
