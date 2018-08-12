import { TestBed, inject } from '@angular/core/testing';

import { Rlogin2Service } from './rlogin2.service';

describe('Rlogin2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Rlogin2Service]
    });
  });

  it('should be created', inject([Rlogin2Service], (service: Rlogin2Service) => {
    expect(service).toBeTruthy();
  }));
});
