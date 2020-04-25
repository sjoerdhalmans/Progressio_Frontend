import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/auth.guard'
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { BacklogComponent } from './backlog/backlog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projectoverview',
    component: ProjectoverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'backlog',
    component: BacklogComponent,
    canActivate: [AuthGuard]
  }
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
