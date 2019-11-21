import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  

  taskForm = new Task();

  getCheckList() {
    return this.taskService.getCheckList();
  }

  addTask(task): void {
    this.taskService.addTask(task);
  }

  delTask(task) :void {
    if (!task) 
      return;
    this.taskService.delTask(task);
  }

  compTask(task) :void {
    if(!task)
      return;
    this.taskService.compTask(task);
  }
  
  onSelect(task): void {
    this.selectedTask = task;
  }
}

