import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigrmDialogueComponent } from './configrm-dialogue.component';

describe('ConfigrmDialogueComponent', () => {
  let component: ConfigrmDialogueComponent;
  let fixture: ComponentFixture<ConfigrmDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigrmDialogueComponent]
    });
    fixture = TestBed.createComponent(ConfigrmDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
