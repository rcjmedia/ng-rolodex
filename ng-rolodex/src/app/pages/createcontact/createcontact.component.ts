import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'createcontact-page',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.scss']
})
export class CreateContactComponent implements OnInit {

    title: string = "Create New Contact";
    formData: {
        firstname: string,
        lastname: string,
        address: string,
        city: string,
        state: string,
        zipcode: number,
        phone: number,
        email: string,
        class: string
    } 
    = {
        firstname: 'John',
        lastname: 'Doe',
        address: '1919 Aloha Street',
        city: 'Honolulu',
        state: 'Hawaii',
        zipcode: 96819,
        phone: 8088008000,
        email: 'john@doe.com',
        class: 'contact-form' //pass the css classname here
    }

    constructor() {}

    submit() { console.log(this.formData) }
  ngOnInit() { }
}