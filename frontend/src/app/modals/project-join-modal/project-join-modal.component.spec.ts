import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJoinModalComponent } from './project-join-modal.component';

describe('ProjectJoinModalComponent', () => {
  let component: ProjectJoinModalComponent;
  let fixture: ComponentFixture<ProjectJoinModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJoinModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
