import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProjectmanagementService {

  constructor(public auth: AuthService, private http: HttpClient, private userService: UserService) { }

  public async getProjects(): Promise<Array<object>> {
    var projects;
    var sub;
    var user;
    await this.auth.getUser$().toPromise().then(res => {
      var userauth = JSON.stringify(res);

      let userObject = JSON.parse(userauth)

      sub = userObject.sub;
    })

    await this.userService.getUser(sub).then(res => {
      var idjson = JSON.stringify(res);

      let idobject = JSON.parse(idjson);

      user = idobject.find(Boolean).id;
    })

    const body = <Object>{
      Content: user,
      Destination: { ApiMethod: "getProjectsByUser", ApiName: "Project" },
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        projects = res;
      })
    return projects;
  }

  public async getProjectById(projectid): Promise<Object> {
    var project;

    const body = <Object>{
      Content: projectid,
      Destination: { ApiMethod: "getProjectsById", ApiName: "Project" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        project = res;
      })

    return project
  }

  public async getBacklogById(projectid): Promise<Object> {
    var backlog;

    const body = <Object>{
      Content: projectid,
      Destination: { ApiMethod: "getBacklogById", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        backlog = res;
      })

    return backlog
  }

  public async saveEpic(epic): Promise<Object> {
    const body = <Object>{
      Content: epic,
      Destination: { ApiMethod: "addEpic", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        epic = res;
      })

    return epic
  }
  
  public async updateEpic(epic): Promise<Object> {
    console.log(epic);

    const body = <Object>{
      Content: epic,
      Destination: { ApiMethod: "updateEpic", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        epic = res;
      })

    return epic
  }

  public async saveStory(story): Promise<Object> {
    const body = <Object>{
      Content: story,
      Destination: { ApiMethod: "addStory", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        story = res;
      })

    return story
  }
  
  public async updateStory(epic): Promise<Object> {
    console.log(epic);

    const body = <Object>{
      Content: epic,
      Destination: { ApiMethod: "updateStory", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        epic = res;
      })

    return epic
  }
}
