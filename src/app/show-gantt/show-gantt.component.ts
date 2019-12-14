import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
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
    let list = this.tasklist;
    let ganttChartData = this.ganttChartData;
    let assignee, taskName = "";
    let startDate, endDate;

    fetchAllData();

    function toTimestamp(strDate){
      return Date.parse(strDate);
    }

    function putInData(taskName, assignee, startDate, endDate){
      let data = {
        name: assignee,
        timelines: {
          [taskName] : [
            {from: startDate, to: endDate, info: 'wtv'}
          ]
        }
      }

      return data
    }
    
    function fetchAllData(){
      // First Level
      list.forEach(function(obj, i){
        taskName = JSON.stringify(list[i].name);
        assignee = JSON.stringify(list[i].attributes[0].assignee);
        startDate = list[i].attributes[0].startDate;
        endDate = list[i].attributes[0].endDate;

        let firstLevelData = putInData(taskName, assignee, startDate, endDate);
        
        ganttChartData.push(firstLevelData);

          // Second Level
          if(list[i].subTask){
            list[i].subTask.forEach(function(obj, i2){

              assignee = JSON.stringify(list[i].subTask[i2].attributes[0].assignee);
              taskName = JSON.stringify(list[i].subTask[i2].name);
              startDate = list[i].subTask[i2].attributes[0].startDate;
              endDate = list[i].subTask[i2].attributes[0].endDate;

              let secondLevelData = putInData(taskName, assignee, startDate, endDate);
        
              ganttChartData.push(secondLevelData);

              // Third Level
              if(list[i].subTask[i2].subTask){
                list[i].subTask[i2].subTask.forEach(function(obj, i3){

                  assignee = JSON.stringify(list[i].subTask[i2].attributes[0].assignee);
                  taskName = JSON.stringify(list[i].subTask[i2].name);
                  startDate = list[i].subTask[i2].subTask[i3].attributes[0].startDate;
                  endDate = list[i].subTask[i2].subTask[i3].attributes[0].endDate;

                  let thirdLevelData = putInData(taskName, assignee, startDate, endDate);
        
                  ganttChartData.push(thirdLevelData);

                });
              }
    
            });
          } 
        });

    }
    
  }

   
    

}
