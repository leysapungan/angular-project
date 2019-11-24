import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { faPlusSquare, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  
  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  selectedTask: Task;
  chooseLevel = 5;

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

  delTask(list, task) :void {
    if (!task) 
      return;
    this.taskService.delTask(list, task);
  }

  compTask(task) :void {
    if(!task)
      return;
    this.taskService.compTask(task);
  }

  editTask(task) : void {
    if(!task)
      return;
    this.taskService.editTask(task);
  }

  onSelect(task): void {
    this.selectedTask = task;
  }
}

