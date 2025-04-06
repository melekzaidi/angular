import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';
import { MatDialog } from '@angular/material/dialog';
import { ConfigrmDialogueComponent } from 'src/app/configrm-dialogue/configrm-dialogue.component';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient ) {

   }

   AddMember(x:Member):Observable<void>{
    return  this.http.post<void>('http://localhost:3000/members',x)

   }
onDelete(id:string):Observable<void>{

    return  this.http.delete<void>('http://localhost:3000/members/'+id)

}   
   GetAllMembers():Observable<Member[]>{
  return  this.http.get<any[]>('http://localhost:3000/members')
  }
  getMemberById(idCourant:String ):Observable<Member>
  {
    return this.http.get<Member>
    (`http://localhost:3000/members/${idCourant}`)
  }
  updateMember(M:Member,idCourant:String):Observable<void>{
    return this.http.put<void>    (`http://localhost:3000/members/${idCourant}`,M)

  }
}
