import { TestBed } from '@angular/core/testing';

import { ProjectmanagementService } from './projectmanagement.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProjectmanagementService', () => {
  let service: ProjectmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    });
    service = TestBed.inject(ProjectmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
