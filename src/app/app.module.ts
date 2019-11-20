import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
