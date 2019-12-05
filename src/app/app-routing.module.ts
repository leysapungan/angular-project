import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckListComponent } from './check-list/check-list.component';
// import { TaskDetailComponent } from './task-detail/task-detail.component';

import {ShowTableComponent} from './show-table/show-table.component';
import {ShowGanttComponent} from './show-gantt/show-gantt.component';


const routes: Routes = [
  { path: 'checkList', component: CheckListComponent },
  // { path: 'detail/:id', component: TaskDetailComponent},
  {path: 'table', component: ShowTableComponent},
  {path: 'gantt', component: ShowGanttComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
