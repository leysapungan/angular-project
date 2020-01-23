import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGanttComponent } from './show-gantt.component';
import { GanttChartComponent } from '../gantt-chart/gantt-chart.component';
import { faCaretRight, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

describe('ShowGanttComponent', () => {
  let component: ShowGanttComponent;
  let fixture: ComponentFixture<ShowGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGanttComponent, GanttChartComponent ],
      providers: [
        faPlusSquare, faTrashAlt, faCaretRight
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
