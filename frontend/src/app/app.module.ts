import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HttpClientModule }    from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ProjectNavBarComponent } from './project-nav-bar/project-nav-bar.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { EpicComponent } from './epic/epic.component';
import { NgbdModalBasic } from './modals/ngbd-modal-basic/ngbd-modal-basic.component';
import { EpicUpdateModalComponent } from './modals/epic-update-modal/epic-update-modal.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AuthenticationComponent,
    ProjectComponent,
    ProfileComponent,
    FooterComponent,
    NotfoundComponent,
    ProjectoverviewComponent,
    BacklogComponent,
    ProjectNavBarComponent,
    TaskboardComponent,
    EpicComponent,
    NgbdModalBasic,
    EpicUpdateModalComponent
  ],
  imports: [
    BrowserModule,
    SimplebarAngularModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
