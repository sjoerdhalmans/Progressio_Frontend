import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProjectmanagementService } from '../services/projectmanagement.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit  {

  constructor(private authService: AuthService, private projectService: ProjectmanagementService) { }
  

  ngOnInit(): void {
    this.projectService.getProjects();
  }


  async ngOnDestroy() {

  }

}
