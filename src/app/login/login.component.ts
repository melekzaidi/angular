import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  constructor(private AS:AuthService,private router:Router){

  }
  sub(){
    console.log("email/pass",this.email,this.password)
    this.AS.signInWithEmailAndPassword(this.email,this.password).then(()=>{
      this.router.navigate(['/member'])
    }).catch(e=>{

    });
  }

}
