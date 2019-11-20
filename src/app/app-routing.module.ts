import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckListComponent } from './check-list/check-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: 'checkList', component: CheckListComponent },
  { path: 'detail/:id', component: TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
