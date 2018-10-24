import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Modules */
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, appRoutes } from './app-routing.module';
/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component';
import { MyProfileComponent } from './pages/myprofile/myprofile.component';
import { CreateContactComponent } from './pages/createcontact/createcontact.component';
import { UserComponent } from './pages/user/user.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { SharedComponent } from './pages/user/shared/shared.component';
import { AuthComponent } from './pages/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ViewAllContactsComponent,
    MyProfileComponent,
    CreateContactComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    SharedComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
