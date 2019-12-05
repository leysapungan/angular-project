import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { faPlusSquare, faTrashAlt, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

import { TaskService } from '../task.service';
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
  providers: [TaskService]
})
  
export class CheckListComponent implements OnInit {

  @Input('tasks') tasklist: any[];
  @Output('taskChange') taskChange = new EventEmitter();
  @Output('taskStatus') taskStatus = new EventEmitter();
  
  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSave = faSave;
  faTimes = faTimes;
  

  selectedTask: Task;
  chooseLevel = 2;
  
  constructor() { }
  ngOnInit() {
  }
  
  getCheckList() {
    return this.tasklist;
  }

  changeTasks(task, opt, event) {
    console.log(event.currentTarget.className);
    var className = event.currentTarget.className;
    this.taskChange.emit({task, opt, className});
  }

  // addTask(task, event): void {
  //   this.taskChange.emit(task);
  //   // this.taskService.addTask(task);
  //   console.log(event);
  //   debugger;
  // }

  // delTask(list, task) :void {
  //   if (!task) 
  //     return;
  //   // this.taskService.delTask(list, task);
  // }

  compTask(task) :void {
    if(!task)
      return;
      this.taskStatus.emit(task);
  }

  // editTask(task, newValue) : void {
  //   if(!task)
  //     return;
  //   // this.taskService.editTask(task, newValue);
  // }

  // cancelEditTask(task, inputValue) : void {
  //   if(!task)
  //     return;
  //   inputValue.value = task.name;
  //   // this.taskService.editTask(task, inputValue.value);
  // }


  onSelect(task): void {
    this.selectedTask = task;
  }

  getLevelValue()
  {
    return this.chooseLevel;
  }

  changeComboBox(value)
  {
    this.chooseLevel = value;
  }
}

