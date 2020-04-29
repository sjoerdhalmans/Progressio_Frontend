import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { ProjectmanagementService } from 'src/app/services/projectmanagement.service';

interface Story {
  name: string;
  description: string;
  projectId: number;
  id: number;
}

@Component({
  selector: 'storyupdatemodal',
  templateUrl: './story-update-modal.component.html',
  styleUrls: ['./story-update-modal.component.css']
})
export class StoryUpdateModalComponent implements OnInit {
  @Input() storyid;

  project;
  handlingStory
  closeResult: string;

  constructor(private modalService: NgbModal, private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    this.handlingStory = this.storyid;
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
    const story: Story = {
      name: enteredName,
      description: content,
      projectId: this.project.id,
      id: this.handlingStory
    }

    console.log(story)
    await this.projectService.updateStory(story);
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
