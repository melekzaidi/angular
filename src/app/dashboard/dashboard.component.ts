import { Component } from '@angular/core';
import { EventsService } from 'src/Services/events.service';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Nb_Members:number=0;
Nb_Events:number=0;
Nb_Tools:number=0;
Nb_Articles:number=0;
constructor(private Ms:MemberService,private Es:EventsService){
  this.Ms.GetAllMembers().subscribe((data)=>{
    this.Nb_Members=data.length;
  })
  this.Es.getAllEvents().subscribe((data)=>{
    this.Nb_Events=data.length;
  })
}
}
