import { TestBed } from '@angular/core/testing';

import { ExchangeHistoryService } from './exchange-history.service';

describe('ExchangeHistoryService', () => {
  let service: ExchangeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
