import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfigrmDialogueComponent } from '../configrm-dialogue/configrm-dialogue.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  displayedColumns: string[] = ['1', '2', '3', '4','5','6'];
// creer table des membre 
dataSource:Member[]=[];
constructor(private Ms:MemberService,private dialog:MatDialog)
{

}
delete(id:string):void{
  let dialogRef=this.dialog.open(ConfigrmDialogueComponent,{height:'200px',width:'300px'})
  dialogRef.afterClosed().subscribe(result => {
if(result)
{
  this.Ms.onDelete(id).subscribe(()=>{this.Ms.GetAllMembers().subscribe((data)=>{
    this.dataSource=data})})
}  });


}
ngOnInit(): void {
  this.Ms.GetAllMembers().subscribe((data)=>{
    this.dataSource=data})
}}
