import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';
import { observable } from 'rxjs';

@Component({
  selector: 'NavBarComponent',  
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profile: any = null;

  constructor(public auth: AuthService, public user : UserService) { 
   }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => this.profile = profile
    );
  }

}