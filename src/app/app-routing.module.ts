import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatoruserLoginComponent } from './creatoruser-login/creatoruser-login.component';
import { CreatoruserRegComponent } from './creatoruser-reg/creatoruser-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileuploadnewComponent } from './fileuploadnew/fileuploadnew.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';


const routes: Routes = [
  {path:'',component:LoginformComponent},
  {path:'reg',component:RegistrationformComponent},
  {path:'dash',component:DashboardComponent},
  {path:'creatorlogin',component:CreatoruserLoginComponent},
  {path:'creatorreg',component:CreatoruserRegComponent},
  {path:'fileuploadnew',component:FileuploadnewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
