import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectoverview',
  templateUrl: './projectoverview.component.html',
  styleUrls: ['./projectoverview.component.css']
})
export class ProjectoverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  project

  async ngOnInit() {
    await this.route.queryParams.subscribe(params => {
      this.project = params['name'];
    });
  }

}
