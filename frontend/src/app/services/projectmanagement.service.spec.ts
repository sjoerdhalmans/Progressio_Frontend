import { TestBed } from '@angular/core/testing';

import { ProjectmanagementService } from './projectmanagement.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProjectmanagementService', () => {
  let service: ProjectmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ProjectmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
