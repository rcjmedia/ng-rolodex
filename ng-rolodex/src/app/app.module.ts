import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Modules */
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, appRoutes } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditcontactComponent } from './pages/editcontact/editcontact.component';

import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component';
import { MyProfileComponent } from './pages/myprofile/myprofile.component';
import { CreateContactComponent } from './pages/createcontact/createcontact.component';

/* Services */
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ViewAllContactsComponent,
    MyProfileComponent,
    CreateContactComponent,
    EditcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
