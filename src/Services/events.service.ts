import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Modeles/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

    constructor(private http:HttpClient ) {
    }
  getAllEvents():Observable<Evt[]>
  {
    return  this.http.get<any[]>('http://localhost:3000/Evt')
  }
  addEvent(x:Evt):Observable<void>{
      return  this.http.post<void>('http://localhost:3000/Evt',x)
  
     }
      getEventById(idCourant:String ):Observable<Evt>
       {
         return this.http.get<Evt>
         (`http://localhost:3000/Evt/${idCourant}`)
       }

        updateEvt(e:Evt,idCourant:String):Observable<void>{
           return this.http.put<void>    (`http://localhost:3000/Evt/${idCourant}`,e)
       
         }
         onDelete(id:string):Observable<void>{

          return  this.http.delete<void>('http://localhost:3000/Evt/'+id)
      
      } 
}
