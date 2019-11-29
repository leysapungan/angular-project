import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Check List';
  public tasklist: any[] = [];

  constructor(private taskService: TaskService){
    this.tasklist = this.taskService.getCheckList();
  }

  functionsOnChange(event) {
    console.log(event);
    switch(event.className)
    {
      case "addBtn":
        this.taskService.addTask(event.task);
        break;

      case "addMainBtn":
        this.taskService.addTask(null);
        break;

      case "delBtn":
        this.taskService.delTask(event.opt, event.task);
        break;

      case "saveBtn":
        this.taskService.editTask(event.task, event.opt);
        break;
    }
  }

  checkStatus(task) {
    this.taskService.compTask(task);
  }

}
