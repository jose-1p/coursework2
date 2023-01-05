import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatoruserLoginComponent } from './creatoruser-login/creatoruser-login.component';
import { CreatoruserRegComponent } from './creatoruser-reg/creatoruser-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FileuploadnewComponent } from './fileuploadnew/fileuploadnew.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    RegistrationformComponent,
    DashboardComponent,
    CreatoruserLoginComponent,
    CreatoruserRegComponent,
    FileuploadnewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
