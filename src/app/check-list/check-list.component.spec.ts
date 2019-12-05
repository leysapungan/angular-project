import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListComponent } from './check-list.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskService } from '../task.service';

describe('CheckListComponent', () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,FontAwesomeModule
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
 
});
