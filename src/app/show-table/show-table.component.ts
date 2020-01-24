import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faTrashAlt, faEdit, faSave, faTimes, faCaretRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalViewComponent } from '../modal-view/modal-view.component';


@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  @Input('tasks') tasklist: any[];
  @Input ('chooseLevel') chooseLevel;
  @Output('taskChange') taskChange = new EventEmitter();
  @Output('taskStatus') taskStatus = new EventEmitter();
  

  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSave = faSave;
  faTimes = faTimes;
  faCaretRight = faCaretRight;
  faCalendarAlt = faCalendarAlt;

  editIdx = 0;
  editName = 1;
  editStartDate = 2;
  editEndDate = 3;
  editAssignee = 4;

  dateModel;

  result: object;

  constructor(private modalService: NgbModal) { }

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
    task.editing = false;
    this.editIdx = 0;
  }

  compTask(task) :void {
    if(!task)
      return;
      this.taskStatus.emit(task);
  }


  /* Edit - Double Click */
  dbClickName(task) {
    task.editing = true;
    this.setEditing(task, this.tasklist);
    this.editIdx = this.editName;
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

  dbClickAssignee(task)
  {
    task.editing = true;
    this.setEditing(task, this.tasklist);
    this.editIdx = this.editAssignee;
  }


  openModalView(task) //edit assignee
  {
    const modalRef = this.modalService.open(ModalViewComponent);
    modalRef.componentInstance.modalTask = task;

    modalRef.result.then((result) => {
        console.log("result : ", result);
        task.attributes[0].assignee = result;
    }).catch((error) => {
        console.log("error : ", error);
    });
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


