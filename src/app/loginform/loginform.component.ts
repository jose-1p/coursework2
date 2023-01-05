import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private userData: UserdataService) { }

  ngOnInit(): void {
  }
  display(data:any){
    console.log(data)
    this.userData.loginCheck(data).subscribe(response=>{
      console.log(response)
      if(response == 200)
      this.router.navigate(['/dash'])
    })
  }

}
