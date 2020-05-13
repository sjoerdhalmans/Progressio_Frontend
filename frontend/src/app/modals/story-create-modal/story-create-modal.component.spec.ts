import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCreateModalComponent } from './story-create-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('StoryCreateModalComponent', () => {
  let component: StoryCreateModalComponent;
  let fixture: ComponentFixture<StoryCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ StoryCreateModalComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
