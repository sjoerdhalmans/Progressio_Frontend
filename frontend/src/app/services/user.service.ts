import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/getAllUsers';  // URL to web api

  constructor(public auth: AuthService, private http: HttpClient, private messageService: MessageService) { }

  public getUser(subclaim) {
    var users;

    const body = <Object>{
      Content: { },
      Destination: { ApiMethod: "getAllUsers", ApiName: "User" },
    }

    this.http.post<Object>('http://localhost:1957/api/gateway', body).toPromise()
      .then(res => {
        users = res;

        console.log(users)

        var user = users.filter(x => x.sub == subclaim);

        console.log(subclaim)
        console.log(users)
        console.log('test filter');
        console.log(user);
        console.log('filter test over');

        if (user.length == 0) {
          console.log('user not found, creating account')
          this.createUser()
        }
        else {
          console.log('user  found')
        }
      })
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
          'Access-Control-Allow-Origin' : '*'
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
