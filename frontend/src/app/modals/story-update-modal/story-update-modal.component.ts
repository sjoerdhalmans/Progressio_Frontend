import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { ProjectmanagementService } from 'src/app/services/projectmanagement.service';

interface Story {
  name: string;
  content: string;
  projectId: number;
  id: number;
  priority: number;
}

@Component({
  selector: 'storyupdatemodal',
  templateUrl: './story-update-modal.component.html',
  styleUrls: ['./story-update-modal.component.css']
})
export class StoryUpdateModalComponent implements OnInit {
  @Input() story;

  project;
  handlingStory;
  backlog;
  closeResult: string;
  stories: Array<Story>;
  hideModal: boolean = false;

  constructor(private modalService: NgbModal, private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    this.handlingStory = this.story;
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentStories.subscribe(stories => this.stories = stories);
    }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async onSubmit(enteredName: string, content: string, epic: number) {
    console.log("submitting");
    const story = {
      name: enteredName,
      content: content,
      projectId: this.project.id,
      id: this.handlingStory.id,
      priority: null,
      epicId: epic
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

  public async deleteStory() {
    console.log("test")
    await this.projectService.deleteStory(this.handlingStory);
    var backlog = await this.projectService.getBacklogById(this.project.id)
    await this.data.changeBacklog(backlog);
    this.modalService.dismissAll();
  }
}
