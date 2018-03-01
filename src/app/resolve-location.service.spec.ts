import { TestBed, inject } from '@angular/core/testing';

import { ResolveLocationService } from './resolve-location.service';

describe('ResolveLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveLocationService]
    });
  });

  it('should be created', inject([ResolveLocationService], (service: ResolveLocationService) => {
    expect(service).toBeTruthy();
  }));
});
