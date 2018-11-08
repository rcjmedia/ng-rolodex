// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router'

// @Component({
//     templateUrl: './home.component.html',
//     styleUrls: ['./home.component.scss']
// })
// export class HomeComponent {
//     loginFormData: { username: string} = { username: ''}

//     constructor(
//         private auth: AuthService,
//         private router: Router) {}

//     login() {
//         console.log('CLICKED LOGIN', this.loginFormData)
//         return this.auth.login(this.loginFormData)
//         .then(() => {
//             console.log('user is logged in')
//         })
//         .then(() => {
//             this.router.navigate(['/'])
//         })
//         .catch(err => {
//             console.log('ERROR LOGGING IN', err)
//         })
//     }
// }

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { BackendService } from '../../services/backend.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  term: string = '';
  contactsMatch: any = '';

  constructor(private backend: BackendService) {}

  search() {
    this.backend.search(this.term)
    .then(response => {
      console.log('search result: ', response);
      this.contactsMatch = response;
    })
  }
}