import { TestBed } from '@angular/core/testing';

import { PersonnelApiService } from './personnel-api.service';

describe('PersonnelApiService', () => {
  let service: PersonnelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
