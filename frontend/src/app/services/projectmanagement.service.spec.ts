import { TestBed } from '@angular/core/testing';

import { ProjectmanagementService } from './projectmanagement.service';

describe('ProjectmanagementService', () => {
  let service: ProjectmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
