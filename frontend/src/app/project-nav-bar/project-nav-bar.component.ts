import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ProjectNavBarComponent',
  templateUrl: './project-nav-bar.component.html',
  styleUrls: ['./project-nav-bar.component.css']
})
export class ProjectNavBarComponent implements OnInit {
  profile: any = null;

  constructor(public auth: AuthService, public user : UserService) { 
   }

  ngOnInit() {
    if (this.auth.userProfile$ != undefined) {
      this.auth.userProfile$.subscribe(
        profile => this.profile = profile
      );
    }
  }
}
