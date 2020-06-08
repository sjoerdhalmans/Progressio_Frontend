import { TestBed } from '@angular/core/testing';

import { ProjectmanagementService } from './projectmanagement.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectmanagementService', () => {
  let service: ProjectmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(ProjectmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
