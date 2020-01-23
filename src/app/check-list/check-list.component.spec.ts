import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListComponent } from './check-list.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckListComponent', () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,FontAwesomeModule, RouterTestingModule
      ],

      declarations: [ CheckListComponent , TaskDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should show the level options', () =>{
    let fixture = TestBed.createComponent(CheckListComponent);
    let app = fixture.debugElement.componentInstance;
    app.chooselevel =2;
    let chooselevel= fixture.debugElement.injector.get(TaskService);
    fixture.detectChanges();
    expect(chooselevel.checklist).toBeTruthy(TaskService);
  });

  // example of a test of a component function which emits an event
  it('changeTask should emit the task passed into it', () =>{
    let app = fixture.debugElement.componentInstance;
    spyOn(component.taskChange, 'emit').and.stub();
    const event = { currentTarget: {
      className: 'ggg'
    }};
    const task = new Task();
    task.name = 'new name';
    component.changeTasks(task, null, event);
    expect(component.taskChange.emit).toHaveBeenCalledWith({task: task, opt: null, className: 'ggg'});
  });
 
});
