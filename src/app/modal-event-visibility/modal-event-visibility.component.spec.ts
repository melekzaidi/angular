import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventVisibilityComponent } from './modal-event-visibility.component';

describe('ModalEventVisibilityComponent', () => {
  let component: ModalEventVisibilityComponent;
  let fixture: ComponentFixture<ModalEventVisibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEventVisibilityComponent]
    });
    fixture = TestBed.createComponent(ModalEventVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
