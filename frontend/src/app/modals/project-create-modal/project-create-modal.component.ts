import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { ProjectmanagementService } from 'src/app/services/projectmanagement.service';

@Component({
  selector: 'ProjectCreateModal',
  templateUrl: './project-create-modal.component.html',
  styleUrls: ['./project-create-modal.component.css']
})
export class ProjectCreateModalComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal, private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async onSubmit(projectcode) {
    
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
