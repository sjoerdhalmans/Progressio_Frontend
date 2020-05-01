import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
import { ProjectmanagementService } from '../services/projectmanagement.service';

@Component({
  selector: 'MembersComponent',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  project
  backlog
  
  constructor(private data: ProjectDataService , private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
  }

}
