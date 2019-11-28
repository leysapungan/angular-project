import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input () task: Task;

  constructor() { }

  ngOnInit() {
  }

  getAttr(task)
  {
    debugger;
    var attr = task.attributes;
    var assignee = attr.assignee;

    console.log(assignee);
  }

}
