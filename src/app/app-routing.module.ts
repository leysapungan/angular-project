import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckListComponent } from './check-list/check-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CompTaskComponent } from './comp-task/comp-task.component';

const routes: Routes = [
  { path: 'checkList', component: CheckListComponent },
  { path: 'detail/:id', component: TaskDetailComponent},
  { path: 'complete', component: CompTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
