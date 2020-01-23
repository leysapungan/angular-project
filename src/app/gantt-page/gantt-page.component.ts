import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-gantt-page',
  templateUrl: './gantt-page.component.html',
  styleUrls: ['./gantt-page.component.css']
})
export class GanttPageComponent implements OnInit {

  chartData: Array<any>;

  public tasklist: any[] = [];

  constructor(private taskService: TaskService){
    this.tasklist = this.taskService.getCheckList();
  }

  getLevel() {
    return this.taskService.getLevel();
  }

  functionsOnChange(event) {
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

  setMinDate(task) {
    this.taskService.setMinDate(task);
  }

  setMaxDate(task) {
    this.taskService.setMaxDate(task);
  }

  ngOnInit(){ }


}
