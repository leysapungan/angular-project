import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-gantt',
  templateUrl: './show-gantt.component.html',
  styleUrls: ['./show-gantt.component.css']
})
export class ShowGanttComponent implements OnInit {
  public tasklist: any[] = [];

  constructor(private taskService: TaskService) {
    this.tasklist = this.taskService.getCheckList();
  }

  ganttChartData = [];


  ngOnInit() {
    const list = this.tasklist;

    fetchAllData();
    
    function fetchAllData(){
      // First Level
      list.forEach(function(obj, i){
        
          // Second Level
          if(list[i].subTask){
            list[i].subTask.forEach(function(obj, i2){

              // Third Level
              if(list[i].subTask[i2].subTask){
                list[i].subTask[i2].subTask.forEach(function(obj, i3){
                  const firstLevelAttr = list[i].attributes[0].startDate;
                  const secondLevelAttr = list[i].subTask[i2].attributes[0].startDate;
                  const thirdLevelAttr = list[i].subTask[i2].subTask[i3].attributes[0].startDate;

                  
                  let assignee = JSON.stringify(list[i].attributes[0].assignee);
                  let taskName = JSON.stringify(list[i].name);
                  let startDate = list[i].attributes[0].startDate;
                  let endDate = list[i].attributes[0].endDate;

                  // if(list[i].subTask){

                  //   let assignee = JSON.stringify(list[i].subTask[i2].attributes[0].assignee);
                  //   let taskName = JSON.stringify(list[i].subTask[i2].name);
                  //   let startDate = list[i].subTask[i2].attributes[0].startDate;
                  //   let endDate = list[i].subTask[i2].attributes[0].endDate;

                  // } else if(list[i].subTask[i2].subTask){

                  //   let assignee = JSON.stringify(list[i].subTask[i2].attributes[0].assignee);
                  //   let taskName = JSON.stringify(list[i].subTask[i2].name);
                  //   let startDate = list[i].subTask[i2].subTask[i3].attributes[0].startDate;
                  //   let endDate = list[i].subTask[i2].subTask[i3].attributes[0].endDate;
                  // }

                  let data = {
                    name: assignee,
                    timelines: {
                      [taskName] : [
                        {from: startDate, to: endDate, info: 'wtv'}
                      ]
                    }
                  }

                  // console.log(data);
                  

                });
              } else{
                  console.log("No Third Level");
              }
    
            });
          } 
        });

    }
    
  }

   
    

}
