import { TestBed } from '@angular/core/testing';

import { DonconfigService } from './donconfig.service';

describe('DonconfigService', () => {
  let service: DonconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
