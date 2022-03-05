import { TestBed } from '@angular/core/testing';

import { AminitydataService } from './aminitydata.service';

describe('AminitydataService', () => {
  let service: AminitydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AminitydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
