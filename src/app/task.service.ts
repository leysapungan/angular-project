import { Injectable } from '@angular/core';
import { Task } from './task';
import { SubTask } from './subTask';

var SubList: SubTask[] = [
  {id:1, pId:1, name:'Subtask 1', status:false, desc:'This is subtask 1'},
  {id:2, pId:1, name:'Subtask 2', status:false, desc:'This is subtask 2'},
  {id:3, pId:1, name:'Subtask 3', status:false, desc:'This is subtask 3'}
];

var CheckList: Task[] = [
  {id:1, name:'Basic Project', status:false, subTask:SubList, desc:'Description of task 1'},
  {id:2, name:'Office Setup', status:true, subTask:null, desc:'Description of task 2'}
];


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  checklist = CheckList;
  subList = SubList;
  // selectedTask: Task;


  getCheckList(): Task[] {
    
    return this.checklist;
  }

  getSubTasks(): SubTask[] {
    return this.subList;
  }

  addTask(taskForm:Task): void {
    var newId =! this.checklist.length?1: this.checklist[this.checklist.length-1].id + 1;

    var newTask = {
      id:newId,
      name:taskForm.name,
      status:false,
      subTask:null,
      desc:taskForm.desc
    };
    this.checklist.push(newTask);
  }

  delTask(id:number): void {
    var idx = this.checklist.findIndex(function (item) {
      return item.id === id;
    });

    var subCnt = this.checklist[idx].subTask.length;
    for (var i = 0; i < subCnt; i++)
    {
      var subIdx = this.subList.findIndex(function (subItem) {
        return subItem.pId === idx;
      });
      this.subList.splice(subIdx, 1);
    }
    this.checklist.splice(idx, 1);
  }

  delSubTask(id:number): void {
    var idx = this.subList.findIndex(function (item) {
      return item.id === id;
    });
    this.subList.splice(idx, 1);
  }

  // compTask(id:number) : void {
  //   var compItem = this.checklist.find(this.findIdx, id);
  //   var idx = this.checklist.indexOf(compItem);
  //   this.checklist[idx].status = true;
  // }

  findIdx(id) {
    var idx = this.checklist.findIndex(function (item) {
      return item.id === id;
    });
  }


  // onSelect(task: Task): void {
  //   this.selectedTask = task;
  // }
}
