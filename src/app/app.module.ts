import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BeautifulChartsModule } from 'ngx-beautiful-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { FormsModule } from '@angular/forms';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from './task.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowTableComponent } from './show-table/show-table.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { ShowGanttComponent } from './show-gantt/show-gantt.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    TaskDetailComponent,
    ShowTableComponent,
    ModalViewComponent,
    ShowGanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BeautifulChartsModule
    
  ],
  providers: [TaskService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalViewComponent]
})
export class AppModule { }
