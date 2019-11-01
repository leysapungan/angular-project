import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { SubTask } from '../subTask';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  
  selectedTask: Task;
  inputTask: string;
  inputDesc: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  taskForm = new Task();

  getCheckList(): Task[] {
    return this.taskService.getCheckList();
  }

  getSubTasks(): SubTask[] {
    return this.taskService.getSubTasks();
  }

  addTask(): void {
    this.taskService.addTask(this.taskForm);
    this.inputTask = '';
    this.inputDesc = '';
  }

  delTask(id:number) :void {
    if (!id) 
      return;
    this.taskService.delTask(id);
  }

  // compTask(id:number) :void {
  //   if(!id)
  //     return;
  //   this.taskService.compTask(id);
  // }

  // onSelect(task: Task): void {
  //   this.taskService.onSelect(task);
  // }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}

