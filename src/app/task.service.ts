import { Injectable } from '@angular/core';
import { Task } from './task';



var CheckList: Task[] = [
  {
      id:1,
      level:0,
      name:'1',
      status:false,
      hidden:false,
      attributes:[
      {
          startDate:'2019-11-01',
          endDate:'2019-11-05',
          assignee:['AA','BB']
      }
      ],
      subTask:[
      {
          id:1,
          level:1,
          name:'1-1',
          status:false,
          hidden:false,
          attributes:[
          {
              startDate:'2019-11-01',
              endDate:'2019-11-05',
              assignee:['AA','BB']
          }
          ],
          subTask:[
          {
              id:1,
              level:2,
              name:'1-1-1',
              status:true,
              hidden:false,
              attributes:[
              {
                  startDate:'2019-11-01',
                  endDate:'2019-11-05',
                  assignee:['AA','BB']
              }
              ],
              subTask:null
          },
          {
              id:2,
              level:2,
              name:'1-1-2',
              status:false,
              hidden:false,
              attributes:[
              {
                  startDate:'2019-11-01',
                  endDate:'2019-11-05',
                  assignee:['AA','BB']
              }
              ],
              subTask:null
          },
          {
              id:3,
              level:2,
              name:'1-1-3',
              status:false,
              hidden:false,
              attributes:[
              {
                  startDate:'2019-11-01',
                  endDate:'2019-11-05',
                  assignee:['AA','BB']
              }
              ],
              subTask:[
              {
                  id:1,
                  level:3,
                  name:'1-1-3-1',
                  status:false,
                  hidden:false,
                  attributes:[
                  {
                      startDate:'2019-11-01',
                      endDate:'2019-11-05',
                      assignee:['AA','BB']
                  }
                  ],
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
          hidden:false,
          attributes:[
          {
              startDate:'2019-11-01',
              endDate:'2019-11-05',
              assignee:['AA','BB']
          }
          ],
          subTask:null
      },
      {
          id:3,
          level:1,
          name:'1-3',
          status:false,
          hidden:false,
          attributes:[
          {
              startDate:'2019-11-01',
              endDate:'2019-11-05',
              assignee:['AA','BB']
          }
          ],
          subTask:null
      }
    ]
  },
      {
      id:2,
      level:0,
      name:'2',
      status:false,
      hidden:false,
      attributes:[
      {
          startDate:'2019-11-01',
          endDate:'2019-11-05',
          assignee:['AA','BB']
      }
      ],
      subTask:[
      {
          id:1,
          level:1,
          name:'2-1',
          status:false,
          hidden:false,
          attributes:[
          {
              startDate:'2019-11-01',
              endDate:'2019-11-05',
              assignee:['AA','BB']
          }
          ],
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
        hidden:false,
        attributes:[
          {
            startDate:null,
            endDate:null,
            assignee:null
          }
        ],
        subTask:null,
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
        hidden:false,
        attributes:[
          {
            startDate:null,
            endDate:null,
            assignee:null
          }
        ],
        subTask:null
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

    for (var i in this.checklist)
    {
      this.checkParentStatus(this.checklist[i]);
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
    
    if(task.subTask)
    {
      this.setChildTask(task.subTask, task);
    }

    if(task.level != 0)
    {
      for (var i in this.checklist)
      {
        this.checkParentStatus(this.checklist[i]);
      }
    }
  }

  setChildTask(subTasks, task)
  {
    for (var i in subTasks)
    {
      subTasks[i].status = task.status;
      if(subTasks[i].subTask)
      {
        this.compTask(subTasks[i]);
      }
    }
  }

  checkParentStatus(task)
  {
    var check = 0;
    for (var i in task.subTask)
    {
      if(task.subTask[i].status)
      {
        check++;
      } 
    }

    if (task.subTask)
    {
      if(check == task.subTask.length)
      {
        task.status = true;
      }
      else
      {
        task.status = false;
        // for (var j in task.subTask)
        // {
        //   this.checkParentStatus(task.subTask[j]);
        // }
        this.checkParentStatus(task.subTask);
      }   
    }
  }

  editTask(task, newValue) : void {
    console.log(newValue);
    task.name = newValue;
    task.editing = false;
  }


}
