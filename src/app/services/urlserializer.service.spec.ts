import { TestBed } from '@angular/core/testing';

import { UrlserializerService } from './urlserializer.service';

describe('UrlserializerService', () => {
  let service: UrlserializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlserializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
