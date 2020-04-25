import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectmanagementService } from '../services/projectmanagement.service';
import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'app-projectoverview',
  templateUrl: './projectoverview.component.html',
  styleUrls: ['./projectoverview.component.css']
})
export class ProjectoverviewComponent implements OnInit {

  message: string;
  constructor(private data: ProjectDataService, private route: ActivatedRoute, private projectService: ProjectmanagementService) { }

  project
  backlog

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);

    console.log(this.project);
    await this.backlog == this.projectService.getBacklogById(this.project.id);
    console.log(this.backlog);
  };

  consolethis() {
    console.log(this.backlog);
  }
}
