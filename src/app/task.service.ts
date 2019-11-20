import { Injectable } from '@angular/core';
import { Task } from './task';

// var SubList: SubTask[] = [
// var subList3: Task[] = [
//   {id:1, level:3, name:'Office Setup', status:true, desc:'Description of task 2', subTask:null}
// ];

// var subList2: Task[] = [
//   {id:1, level:2, name:'Office Setup', status:true, desc:'Description of task 2', subTask:subList3}
// ];

// var SubList: Task[] = [
//   {id:1, level: 1, name:'Subtask 1', status:false, desc:'This is subtask 1', subTask:subList2},
//   {id:2, level: 1, name:'Subtask 2', status:false, desc:'This is subtask 2', subTask:null},
//   {id:3, level: 1, name:'Subtask 3', status:false, desc:'This is subtask 3', subTask:null}
// ];

// var CheckList: Task[] = [
//   {id:1, level:0, name:'Basic Project', status:false, desc:'Description of task 1', subTask:SubList},
//   {id:2, level:0, name:'Office Setup', status:true, desc:'Description of task 2', subTask:null}
// ];

var CheckList: Task[] = [
  {
    id:1,
    level:0,
    name:'1',
    status:false,
    desc:'Description',
    subTask:[
      {
        id:1,
        level:1,
        name:'1-1',
        status:false,
        desc:'Desc',
        subTask:[
          {
            id:1,
            level:2,
            name:'1-1-1',
            status:true,
            desc:'Desc',
            subTask:null
          },
          {
            id:2,
            level:2,
            name:'1-1-2',
            status:false,
            desc:'Desc',
            subTask:null
          },
          {
            id:3,
            level:2,
            name:'1-1-3',
            status:false,
            desc:'Desc',
            subTask:[
              {
                id:1,
                level:3,
                name:'1-1-3-1',
                status:false,
                desc:'Desc',
                subTask:null
              }
            ]
          }
        ]
      },
      {
        id:1,
        level:1,
        name:'1-2',
        status:false,
        desc:'Desc',
        subTask:null
      },
      {
        id:2,
        level:1,
        name:'1-3',
        status:false,
        desc:'Desc',
        subTask:null
      }
    ]
  },
  {
    id:2,
    level:0,
    name:'2',
    status:false,
    desc:'Desc',
    subTask:[
      {
        id:1,
        level:1,
        name:'2-1',
        status:false,
        desc:'Desc',
        subTask:null
      }
    ]
  }
];


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  checklist = CheckList;
  selectedTask: Task;

  getCheckList() {
    return this.checklist;
  }

  addTask(id:number): void {
    if(id == 0)
    {
      var newId;
      if(this.checklist == null || this.checklist.length == 0)
      {
        newId = 1;
      }
      else 
      {
        newId = this.checklist[this.checklist.length-1].id + 1;
      }

      var newTask = {
        id:newId,
        level:0,
        name:'Task',
        status:false,
        subTask:null,
        desc:''
      };
      
      if(this.checklist == null || this.checklist.length == 0)
      {
        this.checklist = [newTask];
      }
      else 
      {
        this.checklist.push(newTask);
      }
    }
    else {
      var idx = this.checklist.findIndex(function (item) {
        return item.id === id;
      });

      var sub = this.checklist[idx].subTask;
      var newSubId;
      
      if(sub == null || sub.length == 0)
      {
        newSubId = 1;
      }
      else 
      {
        newSubId = sub.length;
      }

      var newTask = {
        id:newSubId,
        level:this.checklist[idx].level+1,
        name:'Task',
        status:false,
        subTask:null,
        desc:''
      };

      debugger;
      if(sub == null || sub.length == 0)
      {
        sub = [newTask];
        this.checklist[idx].subTask = sub;
        console.log(this.checklist[idx]);

      }
      else 
      {
        sub.push(newTask);
      }
      console.log(this.checklist);
    }
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
