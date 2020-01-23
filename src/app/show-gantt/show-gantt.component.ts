import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faPlusSquare, faTrashAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-gantt',
  templateUrl: './show-gantt.component.html',
  styleUrls: ['./show-gantt.component.css']
})
export class ShowGanttComponent implements OnInit {

  @Input('tasks') tasklist: any[];
  @Input ('chooseLevel') chooseLevel;
  
  @Output('taskChange') taskChange = new EventEmitter();
  @Output('taskStatus') taskStatus = new EventEmitter();

  @Output('minDate') minDate = new EventEmitter();
  @Output('maxDate') maxDate = new EventEmitter();

  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faCaretRight = faCaretRight;


  dateModel;

  result: object;

  constructor() { }


  ngOnInit() {
  }

  tableHead = [
    'Check List',
    'Actions',
    'Gantt Chart'
  ];

  arrayArrow(n: number): any[] {
    return Array(n);
  }

  getLevelValue()
  {
    return this.chooseLevel;
  }

  changeTasks(task, opt, event) {
    console.log(event.type);
    var className="";
    if(!event.type)
    {
      className = event;
    }
    else
    {
      className = event.currentTarget.className;
    }
    
    this.taskChange.emit({task, opt, className});
  }

  compTask(task) :void {
    if(!task)
      return;
      this.taskStatus.emit(task);
  }

  setMinDate(task) {
    this.minDate.emit(task);
  }

  setMaxDate(task) {
    this.maxDate.emit(task);
  }

  ngOnChanges() {
  }
}
