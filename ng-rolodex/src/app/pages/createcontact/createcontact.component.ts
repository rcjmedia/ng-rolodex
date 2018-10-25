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

    characters: any[]

    constructor(private backend: BackendService) {
        const subtitle: string = 'This is really awesome';

        // this .subtitle = subtitle;
        // this.data.content = 
        //   'content'
        }

    ngOnInit() {
        this.characters = this.backend.characters;

        this.backend.addCharacters({ name: 'Romeo' });

        this.characters.push({ name: 'Liz' });

        this.backend.getCharacter(1)
            .then((data) => {
            console.log(data)
            })

            this.backend.getPlanets(1)
            .then((data) => {
            console.log(data)
            })

            // this.backend.getNbaGames()
            // .then((data) => {
            //   console.log(data)
            // })


    }

}