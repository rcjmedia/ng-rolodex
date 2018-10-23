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
// import { ContactsComponent } from './pages/contacts/contacts.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { NewComponent } from './pages/new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent
    // ContactsComponent
    // ProfileComponent
    // NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'contacts', component: ContactsComponent },
      // { path: 'profile', component: ProfileComponent },
      // { path: 'new', component: NewComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
