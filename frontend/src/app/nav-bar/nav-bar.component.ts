import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'NavBarComponent',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService, public user : UserService) { 
    if (this.auth.isAuthenticated$) {
      this.user.getUsers();
    }
   }

  ngOnInit() {

  }

}