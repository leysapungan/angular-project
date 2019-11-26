import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { faPlusSquare, faTrashAlt, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
  
export class CheckListComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSave = faSave;
  faTimes = faTimes;

  selectedTask: Task;
  chooseLevel = 2;
  
  // @ViewChild('updateTask', {static: false})
  // public  updateTask: ElementRef;
  
  constructor(private taskService: TaskService) { }
  ngOnInit() {
  }
  
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

  editTask(task, newValue) : void {
    if(!task)
      return;
    this.taskService.editTask(task, newValue);
  }

  cancelEditTask(task, inputValue) : void {
    if(!task)
      return;
    inputValue.value = task.name;
    this.taskService.editTask(task, inputValue.value);
  }

  focusOut(event, task, newValue) {
    if(event.relatedTarget && event.relatedTarget.className === "saveBtn")
    {
      this.taskService.editTask(task, newValue);
    }
    else
    {
      this.taskService.editTask(task, task.name);
    }
  }

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

