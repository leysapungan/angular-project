import { Injectable } from '@angular/core';
import { Task } from './task';
import * as d3 from 'd3';



var CheckList: Task[] = [
  {
      id:1,
      level:0,
      name:'Checklist',
      status:false,
      hidden:false,
      importance:9,
      attributes:[
      {
          startDate:'2020-01-02',
          endDate:'2020-02-28',
          assignee:['Harley','Leah', 'Bimal', 'Gagan'],
          minDate:'2020-01-02',
          maxDate:'2020-02-28'
      }
      ],
      subTask:[
      {
          id:1,
          level:1,
          name:'Create checklist',
          status:false,
          hidden:false,
          importance:8,
          attributes:[
          {
              startDate:'2020-01-03',
              endDate:'2020-01-20',
              assignee:['Harley','Leah'],
              minDate:'2020-01-02',
              maxDate:'2020-02-28'
          }
          ],
          subTask:[
          {
              id:1,
              level:2,
              name:'Delete item',
              status:true,
              hidden:false,
              importance:3,
              attributes:[
              {
                  startDate:'2020-01-07',
                  endDate:'2020-01-15',
                  assignee:['Leah'],
                  minDate:'2020-01-03',
                  maxDate:'2020-01-20'
              }
              ],
              subTask:null
          },
          {
              id:2,
              level:2,
              name:'Display list',
              status:false,
              hidden:false,
              importance:5,
              attributes:[
              {
                  startDate:'2020-01-10',
                  endDate:'2020-01-18',
                  assignee:['Leah', 'Harley'],
                  minDate:'2020-01-03',
                  maxDate:'2020-01-20'
              }
              ],
              subTask:[
              {
                  id:1,
                  level:3,
                  name:'Design',
                  status:false,
                  hidden:false,
                  importance:1,
                  attributes:[
                  {
                      startDate:'2020-01-13',
                      endDate:'2020-01-15',
                      assignee:['Harley'],
                      minDate:'2020-01-10',
                      maxDate:'2020-01-18'
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
          name:'Testing',
          status:false,
          hidden:false,
          importance:3,
          attributes:[
          {
              startDate:'2020-01-05',
              endDate:'2020-01-23',
              assignee:['Gagan', 'Bimal'],
              minDate:'2020-01-02',
              maxDate:'2020-02-28'
          }
          ],
          subTask:null
      }
    ]
  },
      {
      id:2,
      level:0,
      name:'Create table',
      status:false,
      hidden:false,
      importance:7,
      attributes:[
      {
          startDate:'2020-01-16',
          endDate:'2020-01-21',
          assignee:['Harley','Leah', 'Bimal', 'Gagan'],
          minDate:'2020-01-05',
          maxDate:'2020-01-23'
      }
      ],
      subTask:null
  }
];


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  checklist = CheckList;
  selectedTask: Task;
  chooseLevel;

  getLevel() {
    return this.chooseLevel;
  }

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

      var today = d3.timeDay(new Date);
      var endDay = d3.timeDay.offset(today, 7);
      var parseDate = d3.timeFormat("%Y-%m-%d");

      var newTask = {
        id:newId,
        level:0,
        name:"New task",
        status:false,
        hidden:false,
        importance:2,
        attributes:[
          {
            startDate:parseDate(today),
            endDate:parseDate(endDay),
            assignee:null,
            minDate:parseDate(today),
            maxDate:parseDate(endDay)
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

      var subStartDate:string = task.attributes[0].startDate;
      var subEndDate:string = task.attributes[0].endDate;
      
      var newTask = {
        id:newSubId,
        level:parseInt(task.level)+1,
        name:'New task',
        status:false,
        hidden:false,
        importance:1,
        attributes:[
          {
            startDate:subStartDate,
            endDate:subEndDate,
            assignee:null,
            minDate:subStartDate,
            maxDate:subEndDate
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
      this.checkParentStatus(this.checklist[i], this.checklist[i].status);
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
        this.checkParentStatus(this.checklist[i], task.status);
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

  checkParentStatus(task, origStatus)
  {
    var check = 0;
    for (var i in task.subTask)
    {
      if(task.subTask[i].status)
      {
        check++;
      } 
    }

    console.log("check : ", check);
    if (task.subTask)
    {
      if(check == task.subTask.length)
      {
        task.status = true;
      }
      else
      {
        
        for (var j in task.subTask)
        {
          this.checkParentStatus(task.subTask[j], origStatus);
        }
      }   
    }
  }


  editTask(task, newValue) : void {
    task.name = newValue;
    task.editing = false;
  }

  setMinDate(task) {
    var subTask = task.subTask;
    if(!subTask)
    {
      return;
    }

    for (var i in subTask)
    {
      var start = new Date(task.attributes[0].startDate);
      var subStart = new Date(subTask[i].attributes[0].startDate);
      
      if(d3.timeDay.count(start, subStart) < 0)
      {
        subTask[i].attributes[0].startDate = task.attributes[0].startDate;
        subTask[i].attributes[0].minDate = task.attributes[0].startDate;

        if(subTask[i].subTask)
        {
          this.setMinDate(subTask[i]);
        }
      } 
    }
  }

  setMaxDate(task) {
    var subTask = task.subTask;
    
    if(!subTask)
    {
      return;
    }
    for (var i in subTask)
    {
      var end = new Date(task.attributes[0].endDate);
      var subEnd = new Date(subTask[i].attributes[0].endDate);
      if(d3.timeDay.count(end, subEnd) < 0)
      {
        subTask[i].attributes[0].endDate = task.attributes[0].endDate;
        subTask[i].attributes[0].maxDate = task.attributes[0].endDate;

        if(subTask[i].subTask)
        {
          this.setMaxDate(subTask[i]);
        }
      }
    }
  }


}
