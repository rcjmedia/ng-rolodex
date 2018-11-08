import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  nameValid: boolean = false;
  // Email not required, so this value stays true until invalid input entered:
  emailValid: boolean = true;

  nameErrors: string[] = [];
  emailErrors: string[] = [];

  constructor() {}

  validateName(name) {
    // Remove any previously displayed errors:
    this.nameErrors = [];
    // Prevent empty strings from being submitted as "name":
    if (name.length < 1) {
      this.nameValid = false;
      this.nameErrors.push('Name required');
    } else {
      this.nameValid = true;
    }
  }

  validateEmail(email) {
    // Remove any previously displayed errors:
    this.emailErrors = [];
    // Ensure email contains at least one "@" symbol:
    if (email.length > 0 && !email.includes('@')) {
      this.emailValid = false;
      this.emailErrors.push('Email requires an "@" symbol');
    } else {
      this.emailValid = true;
    }
  }

  getNameErrors() {
    return this.nameErrors.join(', ');
  }

  getEmailErrors() {
    return this.emailErrors.join(', ');
  }

  clearErrors() {
    this.nameErrors = [];
    this.emailErrors = [];
  }
}