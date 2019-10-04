import { TestBed } from '@angular/core/testing';

import { OperationDataService } from './operation-data.service';

describe('OperationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationDataService = TestBed.get(OperationDataService);
    expect(service).toBeTruthy();
  });
});
