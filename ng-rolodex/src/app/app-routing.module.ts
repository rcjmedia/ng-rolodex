import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component';
import { MyProfileComponent } from './pages/myprofile/myprofile.component';
import { CreateContactComponent } from './pages/createcontact/createcontact.component';
import { UserComponent } from './pages/user/user.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewallcontacts', component: ViewAllContactsComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'createcontact', component: CreateContactComponent },
  {
    path: 'sign-up', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'},

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
