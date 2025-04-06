import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Modeles/Evt';
import { EventsService } from 'src/Services/events.service';
import { ModalEvtComponentComponent } from '../modal-evt-component/modal-evt-component.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  displayedColumns: string[] = ['1', '2', '3', '4', '5','6'];
  dataSource: MatTableDataSource<Evt> = new MatTableDataSource<Evt>();

  constructor(private ES: EventsService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.ES.getAllEvents().subscribe((data: Evt[]) => {
      this.dataSource.data = data; // ✅ Correct way to assign data
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  open() : void{
    

    let dialogRef=this.dialog.open(ModalEvtComponentComponent);
    dialogRef.afterClosed().subscribe(data=>{
      if(data)
     { this.ES.addEvent(data).subscribe(()=>{
        this.ES.getAllEvents().subscribe((data: Evt[]) => {
          this.dataSource.data = data; // ✅ Correct way to assign data
        });
      });
    }  })
   
  }
  openEdit(id: string) {
    // Fetch the event data by ID
    this.ES.getEventById(id).subscribe((event: Evt) => {
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data=event;
      // Open the dialog and pass the event data
      const dialogRef = this.dialog.open(ModalEvtComponentComponent,dialogConfig);

      // Optionally handle the result after the dialog closes
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Dialog closed with result:', result);
          // Handle the updated data if needed
        }
      });
    });
  }
  save()
  {
  }
}
