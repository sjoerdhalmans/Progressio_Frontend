import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'NavBarComponent',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService, public user : UserService) { }

  ngOnInit() {
    console.log('testing before auth')
    console.log(this.auth.isAuthenticated$)
    if (this.auth.isAuthenticated$) {
      console.log('testing in auth')

      this.user.getUser;
    }
    console.log('testing after auth')

  }

}