// import { Component } from '@angular/core';
// import { AuthService } from './../../services/auth.service';

// import { Router } from '@angular/router';

// @Component({
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginTitle: string = 'Log In';
//   loginFormData: {
//     username: string;
//   } = {
//     username: ''
//   };

//   loginError: string;

//   constructor(private auth: AuthService, private router: Router) {}

//   login() {
//     return this.auth.login(this.loginFormData)
//     .then(() => {
//       console.log('user logged in');
//     })
//     .then(() => {
//       this.router.navigate(['/']); // Redirect
//     })
//     .catch((err) => console.log('error: ', err.message));
//   }
// }

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginTitle: string = 'Log In';
  loginFormData: {
    username: string,
    password: string,
  } = {
      username: '',
      password: ''
    }

  submitValid: boolean = true;
  isLoggedIn: boolean;
  errors: boolean = false;
  loginError: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private session: SessionService
  ) { this.isLoggedIn = this.session.isLoggedIn() }

  submitDisabled() {
    if (this.loginFormData.username.length > 1 && this.loginFormData.password.length > 3) {
      return this.submitValid = false;
    } else {
      return this.submitValid = true;
    }
  }

  // login() {
  //   return this.auth.login(this.loginFormData)
  //     .then((response) => {
  //       if (response) {
  //         this.errors = true;
  //         return this.loginError = response;
  //       } else {
  //         return this.router.navigate(['/contacts'])
  //       }
  //     })
  // }

    login() {
    return this.auth.login(this.loginFormData)
    .then(() => {
      console.log('user logged in');
    })
    .then(() => {
      this.router.navigate(['/']); // Redirect
    })
    .catch((err) => console.log('error: ', err.message));
  }
}