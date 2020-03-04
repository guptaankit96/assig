import { TestBed } from '@angular/core/testing';

import { MserService } from './mser.service';

describe('MserService', () => {
  let service: MserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
