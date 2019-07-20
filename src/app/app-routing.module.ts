import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { MeanComponent } from './mean/mean.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'events',component:EventsComponent},
  {path:'mean',component:MeanComponent},
  {path: 'project-list', component:ProjectListComponent},
  {path: 'project', component:ProjectComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
