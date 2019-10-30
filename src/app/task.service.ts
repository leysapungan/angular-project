import { Injectable } from '@angular/core';
import { Task } from './task';

var CheckList: Task[] = [
  {id:1, name:'Wake up', status:false},
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  checklist = CheckList;

  getCheckList(): Task[] {
    return this.checklist;
  }

  addTask(taskForm:Task): void {
    var newId =! this.checklist.length?1: this.checklist[this.checklist.length-1].id + 1;

    var newTask = {
      id:newId,
      name:taskForm.name,
      status:false
    };
    this.checklist.push(newTask);
  }

  delTask(id:number): void {
    var idx = this.checklist.findIndex(function (item) {
      return item.id === id;
    });
    this.checklist.splice(idx, 1);
  }

  compTask(id:number) : void {
    var idx = this.checklist.findIndex(function (item) {
      return item.id === id;
    });
    
  }



}
