import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Modeles/Evt';
import { EventsService } from 'src/Services/events.service';
import { ModalEvtComponentComponent } from '../modal-evt-component/modal-evt-component.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfigrmDialogueComponent } from '../configrm-dialogue/configrm-dialogue.component';
import { ModalEventVisibilityComponent } from '../modal-event-visibility/modal-event-visibility.component';

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
    this.ES.getEventById(id).subscribe({
      next: (event: Evt) => {
        // Configure the dialog
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = event; // Pass the original event data to the dialog

        // Open the dialog
        const dialogRef = this.dialog.open(ModalEvtComponentComponent, dialogConfig);

        // Handle the result after the dialog closes
        dialogRef.afterClosed().subscribe((result: Evt) => {
          if (result) {
            // Update the event with the new data from the dialog
            this.ES.updateEvt( result,id).subscribe({
              next: () => {
                this.ES.getAllEvents().subscribe((data: Evt[]) => {
                  this.dataSource.data = data; // ✅ Correct way to assign data
                });                // Optionally refresh the UI or notify the user
              },
              error: (err) => {
                console.error('Error updating event:', err);
                // Handle the error (e.g., show a notification)
              }
            });
          }
        });
      },
      error: (err) => {
        console.error('Error fetching event:', err);
        // Handle the error (e.g., show a notification)
      }
    });
  }
  openDetails(id: string): void {
    this.ES.getEventById(id).subscribe({
      next: (event: Evt) => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = event;
        this.dialog.open(ModalEventVisibilityComponent, dialogConfig);
      },
      error: (err) => console.error('Error fetching event details:', err),
    });
  }
  save()
  {
  }
  onDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfigrmDialogueComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.ES.onDelete(id).subscribe({
          next: () => {
            // Refresh the event list after deletion
            this.ES.getAllEvents().subscribe({
              next: (data: Evt[]) => {
                this.dataSource.data = data; // Update the table data
                console.log('Event deleted and data refreshed');
              },
              error: (err) => {
                console.error('Error fetching events:', err);
                // Optionally notify the user
              },
            });
          },
          error: (err) => {
            console.error('Error deleting event:', err);
            // Optionally notify the user
          },
        });
      }
    });
  }
}
