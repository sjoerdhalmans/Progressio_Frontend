import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { JsonPipe } from '@angular/common';
import { ProjectDataService } from './project-data.service';
import { promise } from 'protractor';

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
export class ProjectmanagementService {

  constructor(public auth: AuthService, private http: HttpClient, private userService: UserService, private data: ProjectDataService) { }

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

  public async getProjectUsers(Users): Promise<Array<Object>> {
    let fullusers = [];

    console.log(Users);
    console.log(Users);
    for (const user of Users) {
      var founduser = await this.userService.getUserById(user.user);
      fullusers = await fullusers.concat(founduser);
    }

    console.log(fullusers);
    console.log("yuuuuuuu");
    return fullusers;
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

    let stories: Story[] = [];

    await backlog.epics.forEach(element => {
      console.log("teststory")
      console.log(stories)
      stories = stories.concat(element.stories);
    });
    stories = await stories.concat(backlog.lonestories)
    await stories.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
    await this.data.changeStories(stories);

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

  public async deleteStory(storyid) {
    console.log("should delete this" + storyid)
    const body = <Object>{
      Content: storyid,
      Destination: { ApiMethod: "deleteStory", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
  }

  public async deleteEpic(epicid) {
    const body = <Object>{
      Content: epicid,
      Destination: { ApiMethod: "deleteEpic", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
  }

  public async deleteTask(taskid) {
    const body = <Object>{
      Content: taskid,
      Destination: { ApiMethod: "deleteTask", ApiName: "Backlog" }
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
  }
}
