import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faTrashAlt, faEdit, faSave, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  @Input('tasks') tasklist: any[];
  @Output('taskChange') taskChange = new EventEmitter();
  @Output('taskStatus') taskStatus = new EventEmitter();

  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSave = faSave;
  faTimes = faTimes;
  faCaretRight = faCaretRight;

  chooseLevel = 2;
  
  constructor() { }

  ngOnInit() {
  }

  tableHead = [
    'Check List',
    'Actions',
    'Start Date',
    'End Date',
    'Assignee'
  ];

  arrayArrow(n: number): any[] {
    return Array(n);
  }

  getLevelValue()
  {
    return this.chooseLevel;
  }

  changeComboBox(value)
  {
    this.chooseLevel = value;
  }


  changeTasks(task, opt, event) {
    console.log(event.currentTarget.className);
    var className = event.currentTarget.className;
    this.taskChange.emit({task, opt, className});
  }

  compTask(task) :void {
    if(!task)
      return;
      this.taskStatus.emit(task);
  }
}
