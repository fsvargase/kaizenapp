import { TestBed } from '@angular/core/testing';

import { JsonbackendService } from './jsonbackend.service';

describe('JsonbackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonbackendService = TestBed.get(JsonbackendService);
    expect(service).toBeTruthy();
  });
});
