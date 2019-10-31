import { Injectable } from '@angular/core';
import { Task } from './task';
import { SubTask } from './subTask';

var SubList: SubTask[] = [
  {id:1, pId:1, name:'Get up early', status:false}
];

var CheckList: Task[] = [
  {id:1, name:'Wake up', status:false, subTask:SubList},
  {id:2, name:'Study', status:true, subTask:null}
];


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  checklist = CheckList;
  subList = SubList;


  getCheckList(): Task[] {
    
    return this.checklist;
  }

  addTask(taskForm:Task): void {
    var newId =! this.checklist.length?1: this.checklist[this.checklist.length-1].id + 1;

    var newTask = {
      id:newId,
      name:taskForm.name,
      status:false,
      subTask:null
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
    var compItem = this.checklist.find(this.findIdx, id);
    var idx = this.checklist.indexOf(compItem);
    this.checklist[idx].status = true;
  }

  findIdx(id) {
    var idx = this.checklist.findIndex(function (item) {
      return item.id === id;
    });
  }



}
