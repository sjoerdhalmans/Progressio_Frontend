import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/getAllUsers';  // URL to web api

  constructor(public auth: AuthService, private http: HttpClient) { }

  public async getUser(subclaim): Promise<Object> {
    var users;
    var user;

    const body = <Object>{
      Content: {},
      Destination: { ApiMethod: "getAllUsers", ApiName: "User" },
    }

    await this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        users = res;

        user = users.filter(x => x.sub == subclaim);

        if (user.length == 0) {
          console.log('user not found, creating account')
          this.createUser()
        }
        else {
          console.log('user  found')
          console.log(user)
        }
      })
    return user
  }

  public async getUserById(userid): Promise<Object> {
    var user

    const body = <Object>{
      Content: userid,
      Destination: { ApiMethod: "getUserById", ApiName: "User" }
    }

    await this.http.post <Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        user = res;
      })

    return user;
  }

  private myFunc: () => void;
  onSomethingHappended(fn: () => void) {
    this.myFunc = fn;
  }

  private createUser() {
    this.auth.getUser$().toPromise().then(res => {
      var json = JSON.stringify(res)
      var newjson = JSON.parse(json);

      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        })
      };

      const body = <Object>{
        Content: { username: newjson.nickname, email: newjson.email, sub: newjson.sub },
        Destination: { ApiMethod: "addUser", ApiName: "User" },
      }

      this.http.post('http://localhost:1957/api/gateway', body).toPromise().then(res => {
        this.myFunc()
      })
    })
  }
}
