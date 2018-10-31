import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'createcontact-page',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.scss']
})

export class CreateContactComponent {

title: string = "Create New Contact";
    formData: {
        firstname: string,
        lastname: string,
        address: string,
        city: string,
        state: string,
        zipcode: string,
        phone: string,
        email: string,
        class: string
    } 
    = {
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
        email: '',
        class: 'contact-form' //pass the css classname here
    }

    validName: boolean = false;
    validEmail: boolean = false;
    characters: any[]

    constructor(private backend: BackendService) {
        const subtitle: string = 'This is really awesome';

        // this .subtitle = subtitle;
        // this.data.content = 
        //   'content'
        }

    submit() {
        console.log(this.formData)
    }

    validateName() {
        // console.log('validateName');
        if (!this.formData.firstname && !this.formData.lastname) {
            this.validName = false;
        }
        else if (this.formData.firstname.length < 3) {
            this.validName = false;
        }
        else if (this.formData.lastname.length < 3) {
            this.validName = false;
        }else {
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

    isDisabled() {
        return !this.validName || !this.validEmail;
    }    

    ngOnInit() {
        // this.characters = this.backend.characters;

        // this.backend.getCharacter(1)
        //     .then((data) => {
        //     console.log(data)
        //     })

        //     this.backend.getPlanet(1)
        //     .then((data) => {
        //     console.log(data)
        //     })
    }
}