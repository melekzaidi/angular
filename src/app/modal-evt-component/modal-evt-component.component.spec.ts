import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEvtComponentComponent } from './modal-evt-component.component';

describe('ModalEvtComponentComponent', () => {
  let component: ModalEvtComponentComponent;
  let fixture: ComponentFixture<ModalEvtComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEvtComponentComponent]
    });
    fixture = TestBed.createComponent(ModalEvtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
