import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faTrashAlt, faEdit, faSave, faTimes, faCaretRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbDateParserFormatter, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';


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
  faCalendarAlt = faCalendarAlt;

  chooseLevel = 2;

  editIdx = 0;
  editName = 1;
  editStartDate = 2;
  editEndDate = 3;
  editAssignee = 4;

  dateModel;

  
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

  dbClick(task) {
    console.log("Double click ||" , task);
    task.editing = true;
  }


  dbClickDate(task, opt, date) 
  {
    
    task.editing = true;
    this.setEditing(task, this.tasklist);
    this.dateModel = this.setDate(date);

    if(opt == 'start')
    {
      this.editIdx = this.editStartDate;
    }
    else
    {
      this.editIdx = this.editEndDate;
    }
   
  }


  setEditing(task, list)
  {
    for (var i=0; i < list.length; i++)
    {
      if(task !== list[i])
      {
        list[i].editing = false;
      }

      var tmpTask = list[i];
      if(tmpTask.subTask)
      {
        this.setEditing(task, tmpTask.subTask);
      }
    }
  }

  setDate(dateStr)
  {
    if(!dateStr || dateStr == '')
    {
      return null;
    }

    var date = dateStr.trim().split('-');
    const newDate: NgbDateStruct = {year: parseInt(date[0]), month: parseInt(date[1]), day: parseInt(date[2])}
    if(!newDate)
      return null;

    return newDate;
  }


  onDateSelect(task, opt, event) {
    var date = event.year + "-" + event.month + "-" + event.day;
    if(opt == 'start')
    {
      task.attributes[0].startDate = date;
    }
    else
    {
      task.attributes[0].endDate = date;
    }
    this.editIdx = 0;
    task.editing = false;
  }


}


