import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavBarComponent } from './project-nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProjectNavBarComponent', () => {
  let component: ProjectNavBarComponent;
  let fixture: ComponentFixture<ProjectNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ProjectNavBarComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
