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

    for (const user of Users) {
      var founduser = await this.userService.getUserById(user.user);
      fullusers = await fullusers.concat(founduser);
    }

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

  public async joinProject(projectcode): Promise<Object> {
    var joinedUser
    this.auth.getUser$().toPromise().then(async res => {
      var projects
      var foundproject
      var json = JSON.stringify(res)
      var newjson = JSON.parse(json);
      var users
      var user
      await this.userService.getUser(newjson.sub).then(res => {
        users = res;
      });
  
      await this.getAllProjects().then(res => {
        projects = res;
      });
      user = users[0];
      console.log("these are the projects")
      console.log(projects);
      console.log(user);
      foundproject = await projects.find(x => x.projectCode == projectcode)
      console.log(projectcode)
      console.log(foundproject)
  
      const body = <Object>{
        Content: { user: user.id, projectId: foundproject.id },
        Destination: { ApiMethod: "addUserToProject", ApiName: "Project" }
      }

      console.log("Should now be adding user")
      this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        joinedUser = res;
        this.updateProjects()
      })
    })
    return joinedUser;
  }

  private async updateProjects() {
    await this.getProjects().then(res => {
      console.log("starting update");
      console.log(res);
      this.data.changeProjects(res);
      console.log("just updated");
    })
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

  public async getAllProjects(): Promise<Array<object>> {
    const body = <Object>{
      Content: "",
      Destination: { ApiMethod: "getAllProjects", ApiName: "Project"}
    }
    var projects

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise().then(res => {
      projects = res
    })

    console.log(projects)
    return projects;
  }
}
