import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Modules */
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component';
import { MyProfileComponent } from './pages/myprofile/myprofile.component';
import { CreateContactComponent } from './pages/createcontact/createcontact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ViewAllContactsComponent,
    MyProfileComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'viewallcontacts', component: ViewAllContactsComponent },
      { path: 'myprofile', component: MyProfileComponent },
      { path: 'createcontact', component: CreateContactComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
