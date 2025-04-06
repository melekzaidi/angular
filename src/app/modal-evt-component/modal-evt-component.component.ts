import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Evt } from 'src/Modeles/Evt';
import { EventsService } from 'src/Services/events.service';

@Component({
  selector: 'app-modal-evt-component',
  templateUrl: './modal-evt-component.component.html',
  styleUrls: ['./modal-evt-component.component.css']
})
export class ModalEvtComponentComponent  implements OnInit{
  constructor(
    private fb: FormBuilder,
    //forcage de type boite 
    private dialogRef: MatDialogRef<ModalEvtComponentComponent>,
    private EvtService:EventsService,@Inject(MAT_DIALOG_DATA) public data: Evt) {

}
  form!: FormGroup;
  //initialiser formgrou
  ngOnInit(){
    this.form=new FormGroup({
      Titre: new FormControl(null),
      DateDebut:new FormControl(null),
      DateFin:new FormControl(null),
      Lieu:new FormControl(null)
    })
    
    if (this.data) {
      this.form.patchValue({
        Titre: this.data.Titre,
        DateDebut: this.data.DateDebut ? new Date(this.data.DateDebut) : null, // Convert to Date object
        DateFin: this.data.DateFin ? new Date(this.data.DateFin) : null,      // Convert to Date object
        Lieu: this.data.Lieu,
      });}
  }
  save() {
        this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}
  
}
