import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-configrm-dialogue',
  templateUrl: './configrm-dialogue.component.html',
  styleUrls: ['./configrm-dialogue.component.css']
})
export class ConfigrmDialogueComponent {
constructor(public dialogRef:MatDialogRef<ConfigrmDialogueComponent>){}
}
