import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectmanagementService } from '../services/projectmanagement.service';
import { ProjectDataService } from '../services/project-data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-projectoverview',
  templateUrl: './projectoverview.component.html',
  styleUrls: ['./projectoverview.component.css'],
  providers: [HttpClient]
})
export class ProjectoverviewComponent implements OnInit {

  message: string;
  constructor(private data: ProjectDataService) { }

  project
  backlog

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
  };

  consolethis() {
    console.log(this.project);
  }

  consolethat() {
    console.log(this.backlog);
  }
}
