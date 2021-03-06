import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-matrix-page',
  templateUrl: './matrix-page.component.html',
  styleUrls: ['./matrix-page.component.css']
})
export class MatrixPageComponent implements OnInit {

  chartData: Array<any>;

  public tasklist: any[] = [];
  chooseLevel = 5;

  constructor(private taskService: TaskService){
    this.tasklist = this.taskService.getCheckList();
    this.taskService.chooseLevel = this.chooseLevel;
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
