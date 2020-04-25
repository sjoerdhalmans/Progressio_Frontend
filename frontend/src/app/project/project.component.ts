import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProjectmanagementService } from '../services/projectmanagement.service';
import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],

})


export class ProjectComponent implements OnInit {

  message: string;
  constructor(private data: ProjectDataService, private authService: AuthService, private projectService: ProjectmanagementService) { }


  projects = [];


  async ngOnInit() {
    await this.projectService.getProjects().then(res => {
      this.projects = res;
    })


    console.log("test");

    console.log(this.projects);
  }

  async ngOnDestroy() {

  }

  assignProject(project) {
    console.log("testing proj")
    console.log(project)
    this.data.changeProject(project);
  }
}
