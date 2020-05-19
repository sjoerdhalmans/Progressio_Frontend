import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, observable } from 'rxjs';

interface Story {
  name: string;
  content: string;
  projectId: number;
  id: number;
  priority: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private Project = new BehaviorSubject<Object>(empty);
  private ProjectBacklog = new BehaviorSubject<Object>(empty);
  private Stories = new BehaviorSubject<Array<Story>>(null);
  private Epics = new BehaviorSubject<Array<Object>>(null);
  private Projects = new BehaviorSubject<Array<Object>>(null);

  currentProject = this.Project.asObservable();
  currentBacklog = this.ProjectBacklog.asObservable();
  currentStories = this.Stories.asObservable();
  currentProjects = this.Projects.asObservable();
  currentEpics = this.Epics.asObservable();

  constructor() { }

  changeProject(project: Object) {
    this.Project.next(project);
  }

  changeBacklog(backlog: Object) {
    this.ProjectBacklog.next(backlog);
  }

  changeStories(Stories : Array<Story>) {
    this.Stories.next(Stories);
  }

  changeProjects(projects: Array<Object>) {
    this.Projects.next(projects);
  }

  changeEpics(epics: Array<Object>) {
    this.Epics.next(epics)
  }
}
