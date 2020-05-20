import { Component, OnInit } from '@angular/core';
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
  selector: 'CreateStoryModal',
  templateUrl: './story-create-modal.component.html',
  styleUrls: ['./story-create-modal.component.css']
})
export class StoryCreateModalComponent implements OnInit {

  project;
  backlog;
  handlingEpic;
  closeResult: string;
  storyAmount: number;
  stories: Array<Story>;

  constructor(private modalService: NgbModal, private data: ProjectDataService, private projectService: ProjectmanagementService) { }

  async ngOnInit() {
    await this.data.currentProject.subscribe(project => this.project = project);
    await this.data.currentBacklog.subscribe(backlog => this.backlog = backlog);
    await this.data.currentStories.subscribe(stories => this.stories = stories);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async onSubmit(enteredName: string, content: string) {
    const story: Story = {
      name: enteredName,
      content: content,
      projectId: this.project.id,
      id: null,
      priority: null
    }

    this.handlingEpic = await this.projectService.saveStory(story);
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
