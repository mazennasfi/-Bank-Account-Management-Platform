import { TestBed } from '@angular/core/testing';

import { CompteDataService } from './compte-data.service';

describe('CompteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteDataService = TestBed.get(CompteDataService);
    expect(service).toBeTruthy();
  });
});
