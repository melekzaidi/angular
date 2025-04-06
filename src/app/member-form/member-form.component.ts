import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;
  idCourant: String=''

  // Inject MemberService properly through constructor
  constructor(private ms: MemberService,private router:Router,private activatedRoute:ActivatedRoute,) {

  }  // Changed Ms to ms (convention) and added private

  ngOnInit(): void {
    
    this.idCourant=this.activatedRoute.snapshot.params['id']
    console.log('this.idCourant',this.idCourant);
  // si id existe => je suis dans edit
  if(this.idCourant){
    this.ms.getMemberById(this.idCourant).subscribe((M)=>{
      console.log(M.cin)
      this.form = new FormGroup({
        cin: new FormControl(M.cin),
        name: new FormControl(M.name),
        createdDate: new FormControl(M.createdDate),
        type: new FormControl(M.type)  // Changed Type to type (consistency)
      });
    })
  }
  //sinon je suis dans create
  else{  this.form = new FormGroup({
      cin: new FormControl(null),
      name: new FormControl(null),
      createdDate: new FormControl(null),
      type: new FormControl(null)  // Changed Type to type (consistency)
    });}
  }

  sub(): void {
    console.log(this.form.value);
    this.idCourant=this.activatedRoute.snapshot.params['id']
if(this.idCourant){
  this.ms.updateMember(this.form.value,this.idCourant).subscribe(()=>{
    this.router.navigate([''])

  });
}else{
  this.ms.AddMember(this.form.value).subscribe(()=>{
    this.router.navigate([''])
   });
}
  
  }
}