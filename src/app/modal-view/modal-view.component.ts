import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {
  @Input() modalTask;

  assigneeList;

  constructor(public activeModal: NgbActiveModal) { }


  addNewName(value)
  {
    if(!value)
      return;

    if(this.assigneeList)
    {
      this.assigneeList.push(value);
    }
    else
    {
      this.assigneeList = new Array(value);
    }    
  }

  onSave()
  {
    this.activeModal.close([this.assigneeList]);
  }

  deleteName(assignee)
  {
    console.log(assignee);
    var idx = this.assigneeList.findIndex(function (item) {
      return item === assignee;
    });

    this.assigneeList.splice(idx, 1);
  }

  ngOnInit() {

    this.assigneeList = this.modalTask.attributes[0].assignee;
  }

}
