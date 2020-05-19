import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
import { ProjectmanagementService } from '../services/projectmanagement.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent implements OnInit {

  project
  backlog
  epics

  constructor(private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
    await this.data.currentEpics.subscribe(epics => this.epics = epics);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.epics, event.previousIndex, event.currentIndex);

    this.epics.forEach(async element => {
      element.priority = await this.epics.indexOf(element) + 1;

      this.projectService.updateEpic(element);
    });
  }

  consoletest() {
    console.log(this.backlog)
    console.log(this.project)
  }
}
