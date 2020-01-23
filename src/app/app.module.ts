import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';

import { FormsModule } from '@angular/forms';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from './task.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShowTableComponent } from './show-table/show-table.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { ShowGanttComponent } from './show-gantt/show-gantt.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { ShowMatrixComponent } from './show-matrix/show-matrix.component';

import { MainPageComponent } from './main-page/main-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { GanttPageComponent } from './gantt-page/gantt-page.component';
import { MatrixPageComponent } from './matrix-page/matrix-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    ShowTableComponent,
    ModalViewComponent,
    ShowGanttComponent,
    GanttChartComponent,
    ShowMatrixComponent,
    MainPageComponent,
    ListPageComponent,
    TablePageComponent,
    GanttPageComponent,
    MatrixPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule    
  ],
  providers: [TaskService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalViewComponent]
})
export class AppModule { }
