import { TestBed } from '@angular/core/testing';

import { RoleplayService } from './roleplay.service';

describe('RoleplayService', () => {
  let service: RoleplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
