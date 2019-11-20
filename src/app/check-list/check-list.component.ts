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

  // getCheckList(): Task[] {
  //   return this.taskService.getCheckList();
  // }

  // addTask(id:number): void {
  //   this.taskService.addTask(id);
  //   // this.inputTask = '';
  //   // this.inputDesc = '';
  // }

  // delTask(id:number) :void {
  //   if (!id) 
  //     return;
  //   this.taskService.delTask(id);
  // }

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

