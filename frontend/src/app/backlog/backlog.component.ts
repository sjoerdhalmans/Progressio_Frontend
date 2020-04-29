import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
import { ProjectmanagementService } from '../services/projectmanagement.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  project
  backlog

  constructor(private data: ProjectDataService , private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
  }

  consoletest() {
    console.log(this.backlog)
    console.log(this.project)
  }
}
