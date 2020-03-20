import { Injectable } from '@angular/core';
import { AuthService } from '../app/auth.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AuthService) { }

  public getUser() {
    console.log('test')
    console.log(this.auth.userProfile$)
  }
}
