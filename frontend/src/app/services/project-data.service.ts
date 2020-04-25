import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private Project = new BehaviorSubject<Object>(empty);
  private ProjectBacklog = new BehaviorSubject<Object>(empty);

  currentProject = this.Project.asObservable();
  currentBacklog = this.ProjectBacklog.asObservable();

  constructor() { }

  changeProject(project: Object) {
    this.Project.next(project);
  }

  changeBacklog(backlog: Object) {
    this.ProjectBacklog.next(backlog);
  }
}
