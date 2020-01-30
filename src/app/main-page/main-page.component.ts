import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  public tasklist: any[] = [];

  chooseLevel = 2;

  constructor(private taskService: TaskService){
    this.tasklist = this.taskService.getCheckList();
    this.taskService.chooseLevel = 2;
  }


  changeComboBox(value)
  {
    this.chooseLevel = value;
    this.taskService.chooseLevel = this.chooseLevel;
  }
  

  ngOnInit(){ }

}
