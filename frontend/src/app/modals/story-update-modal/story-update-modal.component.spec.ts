import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUpdateModalComponent } from './story-update-modal.component';

describe('StoryUpdateModalComponent', () => {
  let component: StoryUpdateModalComponent;
  let fixture: ComponentFixture<StoryUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryUpdateModalComponent ]
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
