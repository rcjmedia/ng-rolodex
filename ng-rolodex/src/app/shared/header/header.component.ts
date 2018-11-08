import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    user: object;
    
    constructor(
        private router: Router,
        private auth: AuthService,
        private session: SessionService
    ) {
        this.user = this.session.getSession();
    }

    isLoggedIn() {
        return this.session.isLoggedIn();
    }

    login() {
        return this.router.navigate(['/login']);
    }

    logout() {
        return this.auth.logout();
    }

//   logout() {
//     return this.auth
//       .logout(this.user)
//       .then(() => {
//         this.router.navigate(['/']);
//       })
//       .catch(err => {
//         console.log('error', err);
//       });
//   }

}