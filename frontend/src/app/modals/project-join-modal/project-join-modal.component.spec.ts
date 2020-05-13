import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJoinModalComponent } from './project-join-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('ProjectJoinModalComponent', () => {
  let component: ProjectJoinModalComponent;
  let fixture: ComponentFixture<ProjectJoinModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ProjectJoinModalComponent ],
      providers: [HttpClient, HttpHandler]
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
