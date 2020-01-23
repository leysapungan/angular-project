import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePageComponent } from './table-page/table-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { GanttPageComponent } from './gantt-page/gantt-page.component';
import { MatrixPageComponent } from './matrix-page/matrix-page.component';




const appRoutes: Routes = [
  { path: 'checklist', component: ListPageComponent },
  {path: 'table', component: TablePageComponent},
  {path: 'gantt', component: GanttPageComponent},
  {path: 'matrix', component: MatrixPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
