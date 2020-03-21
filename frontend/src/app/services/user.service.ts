import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})  
export class UserService {
  private userUrl = 'api/getAllUsers';  // URL to web api

  constructor(public auth: AuthService, private http: HttpClient, private messageService: MessageService) { }

  public getUsers() {
    var users = this.http.get<Object>('http://localhost:8081/api/getAllUsers').toPromise()
    .then(  res => { // Success
      console.log(res);
      })

    console.log(users);

    console.log('test2')
  }
}
