import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUpdateModalComponent } from './story-update-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('StoryUpdateModalComponent', () => {
  let component: StoryUpdateModalComponent;
  let fixture: ComponentFixture<StoryUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ StoryUpdateModalComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
