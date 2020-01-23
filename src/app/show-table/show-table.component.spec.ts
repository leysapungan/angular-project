import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowTableComponent } from './show-table.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskService } from '../task.service';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ShowTableComponent', () => {
  let component: ShowTableComponent;
  let fixture: ComponentFixture<ShowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,FontAwesomeModule,NgbModule],
      declarations: [ ShowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add the task in the showtable', () =>{
    let fixture = TestBed.createComponent(ShowTableComponent);
    let app = fixture.debugElement.componentInstance;
    app.addTask = true;
    let add= fixture.debugElement.injector.get(TaskService);
    fixture.detectChanges();
    expect(add.addTask).toBeTruthy(TaskService);

  });
  it('should delete the task in the showtable', () =>{
    let fixture = TestBed.createComponent(ShowTableComponent);
    let app = fixture.debugElement.componentInstance;
    app.delTask=true;
    let complied= fixture.debugElement.injector.get(TaskService);
    fixture.detectChanges();
    expect(complied.delTask).toBeTruthy(TaskService);
  });

});
