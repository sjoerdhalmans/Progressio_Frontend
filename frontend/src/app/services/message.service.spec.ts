import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
