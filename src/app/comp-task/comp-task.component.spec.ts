import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTaskComponent } from './comp-task.component';

describe('CompTaskComponent', () => {
  let component: CompTaskComponent;
  let fixture: ComponentFixture<CompTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
