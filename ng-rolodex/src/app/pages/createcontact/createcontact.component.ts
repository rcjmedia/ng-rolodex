import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'createcontact-page',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.scss']
})
export class CreateContactComponent {
  addContactTitle: string = 'Create New Contact';
  formData: {
    name: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string;
    created_by: any;
  } = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twitter: '',
    instagram: '',
    github: '',
    created_by: ''
  };

  user: object;
  validName: boolean = false;
  validEmail: boolean = false;

  constructor(
    private backend: BackendService,
    private session: SessionService,
    private validation: ValidationService
  ) {
    this.user = session.getSession();
    this.formData.created_by = String(this.user['id']);
  }

  validateName() {
    // console.log('validateName');
    if (!this.formData.name) {
        this.validName = false;
    }
    else if (this.formData.name.length < 3) {
        this.validName = false;
    } else {
        this.validName = true;
    }
}

    validateEmail() {
    if (!this.formData.email) {
        this.validEmail = false;
    }
    else if (!this.formData.email.includes('@')) {
        this.validEmail = false;
    }
    else if (this.formData.email.length < 3) {
        this.validEmail = false;
    }
    else {
        this.validEmail = true;
    }
}
  
  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  submitDisabled() {
    return !(this.validation.nameValid && this.validation.emailValid);
  }

  submit() {
    this.backend
      .addContact(this.formData)
      .then(data => {
        console.log(data);
        window.alert('New Contact Added');
        window.location.href = "/api/contacts";
      })
      .catch(err => {
        console.log(err);
      });
  }
}