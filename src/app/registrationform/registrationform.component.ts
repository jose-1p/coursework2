import { createViewChild } from '@angular/compiler/src/core';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  obj={email:""}
  status : any;
  @ViewChild('emailRef',{ static: true }) emailElementRef : ElementRef<HTMLInputElement> ={} as ElementRef
 
  constructor(private router:Router,private userData: UserdataService) { 

  }

  ngOnInit(): void {
  }
validate(data:any){
  console.log(data);
  this.obj['email'] = data['email'];
  console.log(this.obj)
  try {
    
  this.userData.getUser(this.obj,data).subscribe(response=>{
    console.log(response)
    window.alert("emailid existing")  
    this.router.navigate(['/'])                                                                                                                                       
    });
  } catch (error) {
    console.log(error)
  }
 
  // this.userData.saveUser(data).subscribe((result)=>{
  //   console.log(result);
  //   this.router.navigate(['/dash'])
  // })
  // }).catch(error=>{
  //   // this.emailElementRef.nativeElement.value=" "
  //   this.numberOfUsers=1
  //   window.alert("email id existing") 
  //   this.router.navigate(['/'])
  //   console.log(error)
 
//console.log(this.numberOfUsers)
  // if(this.numberOfUsers === 0){
  //  this.userData.saveUser(data).subscribe((result)=>{
  //   console.log(result);
  //   this.router.navigate(['/dash'])
  // })
  // }
//  this.router.navigate(['/dash'])

//   }
//   else{
//     window.alert("Email id already existing")
//     this.router.navigate(['/'])
//   }
}
}
