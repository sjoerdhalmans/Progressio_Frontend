import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { ProjectmanagementService } from 'src/app/services/projectmanagement.service';

interface Epic {
  name: string;
  description: string;
  projectId: number;
  id;
}

@Component({
  selector: 'epicupdatemodal',
  templateUrl: './epic-update-modal.component.html',
  styleUrls: ['./epic-update-modal.component.css']
})

export class EpicUpdateModalComponent implements OnInit {
  @Input() epicid;

  project;
  closeResult: string;
  handlingEpic: number;


  constructor(private modalService: NgbModal, private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    console.log(this.epicid);
    this.handlingEpic = this.epicid;
    console.log('beginpotat');
    console.log(this.handlingEpic);
    console.log('endpotat');
    await this.data.currentProject.subscribe(project => this.project = project);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async onSubmit(enteredName: string, content: string) {
    console.log("submitting");
    const epic: Epic = {
      name: enteredName,
      description: content,
      projectId: this.project.id,
      id: this.handlingEpic
    }

    console.log(epic)
    await this.projectService.updateEpic(epic);
    var backlog = await this.projectService.getBacklogById(this.project.id)
    await this.data.changeBacklog(backlog);
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
