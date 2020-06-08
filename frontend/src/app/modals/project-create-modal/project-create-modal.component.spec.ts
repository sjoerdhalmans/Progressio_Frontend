import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateModalComponent } from './project-create-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ProjectCreateModalComponent', () => {
  let component: ProjectCreateModalComponent;
  let fixture: ComponentFixture<ProjectCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ProjectCreateModalComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
