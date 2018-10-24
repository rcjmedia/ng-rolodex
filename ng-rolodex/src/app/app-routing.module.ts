import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component';
import { MyProfileComponent } from './pages/myprofile/myprofile.component';
import { CreateContactComponent } from './pages/createcontact/createcontact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewallcontacts', component: ViewAllContactsComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'createcontact', component: CreateContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
