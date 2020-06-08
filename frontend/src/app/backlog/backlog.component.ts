import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
import { ProjectmanagementService } from '../services/projectmanagement.service';

interface Story {
  name: string;
  content: string;
  projectId: number;
  id: number;
  priority: number;
}

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  project
  backlog
  stories: Array<Story> = [];

  constructor(private data: ProjectDataService) { }

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
    await this.data.currentStories.subscribe(stories => this.stories = stories);
  }

  consoletest() {
    console.log(this.backlog)
    console.log(this.project)
  }
}
