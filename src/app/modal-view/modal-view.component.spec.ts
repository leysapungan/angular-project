import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewComponent } from './modal-view.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ModalViewComponent', () => {
  let component: ModalViewComponent;
  let fixture: ComponentFixture<ModalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewComponent ],
      imports: [NgbModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
