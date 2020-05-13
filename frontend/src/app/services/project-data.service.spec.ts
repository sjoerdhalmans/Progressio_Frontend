import { TestBed } from '@angular/core/testing';

import { ProjectDataService } from './project-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectDataService', () => {
  let service: ProjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
    });
    service = TestBed.inject(ProjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
