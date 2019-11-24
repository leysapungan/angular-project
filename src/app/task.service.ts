import { Injectable } from '@angular/core';
import { Task } from './task';


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
        id:2,
        level:1,
        name:'1-2',
        status:false,
        desc:'Desc',
        subTask:null
      },
      {
        id:3,
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

  addTask(task): void {
    if(task == null) //Add main task
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
        name:""+newId,
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
    else  //Add sub task
    {
      var sub = task.subTask;
      var newSubId;
      
      if(sub == null || sub.length == 0)
      {
        newSubId = 1;
      }
      else 
      {
        newSubId = sub[sub.length-1].id + 1;
      }

      var newTask = {
        id:newSubId,
        level:parseInt(task.level)+1,
        name:task.name+"-"+newSubId,
        status:false,
        subTask:null,
        desc:''
      };

      if(sub == null || sub.length == 0)
      {
        sub = [newTask];
        task.subTask = sub;
      }
      else 
      {
        sub.push(newTask);
      }
    }
  }

  delTask(list, task): void {
    var idx = list.findIndex(function (item) {
      return item === task;
    });

    list.splice(idx, 1);
  }

  compTask(task) : void {
    if(task.status == true) {
      task.status = true;
    } 
    else {
      task.status = false;
    }
  }

  editTask(task) : void {

  }
}
