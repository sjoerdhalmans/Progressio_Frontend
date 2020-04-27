import { Component, ElementRef, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectmanagementService } from '../services/projectmanagement.service';
import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'ModalComponent',
  templateUrl: './ngbd-modal-basic.component.html',
  styleUrls: ['./ngbd-modal-basic.component.css']
})
export class NgbdModalBasic {


  project;
  closeResult = '';
  epic: {
    name: "" ,
    description: "",
    projectId: 0
  }

  constructor(private modalService: NgbModal, private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async saveEpic() {


    //await this.projectService.saveEpic(this.epic);
  }

  onSubmit(name: string, content: string) {
    console.log(name);
    this.modalService.dismissAll;
    console.log(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}