import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCreateModalComponent } from './story-create-modal.component';

describe('StoryCreateModalComponent', () => {
  let component: StoryCreateModalComponent;
  let fixture: ComponentFixture<StoryCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCreateModalComponent ]
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
