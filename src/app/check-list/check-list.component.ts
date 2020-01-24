import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { faPlusSquare, faTrashAlt, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
  providers: [TaskService]
})
  
export class CheckListComponent implements OnInit {

  @Input('tasks') tasklist: any[];
  @Input ('chooseLevel') chooseLevel;
  @Output('taskChange') taskChange = new EventEmitter();
  @Output('taskStatus') taskStatus = new EventEmitter();
  
  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSave = faSave;
  faTimes = faTimes;
  

  selectedTask: Task;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskService
  ) { }

  ngOnInit() {

  }
  
  getCheckList() {
    return this.tasklist;
  }

  /* 
  For add, edit and delete actions.
  1. opt
    1-1. for delete : list of task
    1-2. for edit : new value 
  2. event : add / edit / delete
    2-1. event.className : addBtn / addMainBtn / delBtn / saveBtn
  */
  changeTasks(task: Task, opt, event): void {
    var className = event.currentTarget.className;
    this.taskChange.emit({task, opt, className});
  }


  /* completed task */
  compTask(task) :void {
    if(!task)
      return;
      this.taskStatus.emit(task);
  }

 /* selected task */
  onSelect(task): void {
    this.selectedTask = task;
  }

  getLevelValue()
  {
    return this.chooseLevel;
  }
}

