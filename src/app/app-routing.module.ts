import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckListComponent } from './check-list/check-list.component';
import {ShowTableComponent} from './show-table/show-table.component';
import {ShowGanttComponent} from './show-gantt/show-gantt.component';


const appRoutes: Routes = [
  { path: 'checklist', component: CheckListComponent },
  {path: 'table', component: ShowTableComponent},
  {path: 'gantt', component: ShowGanttComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
