import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  islogin:boolean=false;
  constructor(private AS:AuthService,private router:Router){
this.router.events.subscribe(()=>{
this.islogin=  this.router.url.includes('/login');
console.log(this.islogin);
})
    }
logout(){
this.AS.signOut().then(()=>{
  this.router.navigate(['/login'])
})
 
}
}
