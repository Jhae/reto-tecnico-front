import { TestBed } from '@angular/core/testing';

import { ExchangeTypeService } from './exchange-type.service';

describe('ExchangeTypeService', () => {
  let service: ExchangeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
