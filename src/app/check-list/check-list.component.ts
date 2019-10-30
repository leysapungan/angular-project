import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  taskForm = new Task();

  getCheckList(): Task[] {
    return this.taskService.getCheckList();
  }

  addTask(): void {
    this.taskService.addTask(this.taskForm);
  }

  delTask(id:number) :void {
    if (!id) 
      return;
    this.taskService.delTask(id);
  }
}

