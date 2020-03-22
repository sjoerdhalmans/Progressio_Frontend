import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'AuthenticationComponent',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit(): void {
    this.auth.getUser$().toPromise().then(res => {
      var user = JSON.stringify(res);

      let userObject = JSON.parse(user)

      this.userService.getUser(userObject.sub);
    })
  }

}
