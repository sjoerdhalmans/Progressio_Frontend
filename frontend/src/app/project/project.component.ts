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
    await this.data.currentProjects.subscribe(projectlist => this.projects = projectlist)
    await this.projectService.getProjects().then(res => {
      this.data.changeProjects(res);
    })
  }

  async ngOnDestroy() {

  }

  async assignProject(project) {
    var backlog = await this.projectService.getBacklogById(project.id)
    var users = await this.projectService.getProjectUsers(project.users);
    project.users = users;
    this.data.changeProject(project);
    this.data.changeBacklog(backlog);
  }
}
