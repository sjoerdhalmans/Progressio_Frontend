import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoverviewComponent } from './projectoverview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProjectoverviewComponent', () => {
  let component: ProjectoverviewComponent;
  let fixture: ComponentFixture<ProjectoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ProjectoverviewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
