import { TestBed } from '@angular/core/testing';

import { WebpayApiService } from './webpay-api.service';

describe('WebpayApiService', () => {
  let service: WebpayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
