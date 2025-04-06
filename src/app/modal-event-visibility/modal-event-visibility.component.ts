import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evt } from 'src/Modeles/Evt';

@Component({
  selector: 'app-modal-event-visibility',
  templateUrl: './modal-event-visibility.component.html',
  styleUrls: ['./modal-event-visibility.component.css']
})
export class ModalEventVisibilityComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEventVisibilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Evt // Injected event data
  ) {}

  close() {
    this.dialogRef.close();
  }
}
