import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'viewallcontacts-page',
  templateUrl: './viewallcontacts.component.html',
  styleUrls: ['./viewallcontacts.component.scss']
})

export class ViewAllContactsComponent implements OnInit {

  title: string = 'This is awesome';
  subtitle: string;
  data: {
    header: string
  } = {
    header: 'THIS IS THE HEADERS'
  };

  characters: any[]

  constructor(private backend: BackendService) {
    const subtitle: string = 'This is really awesome';

    this .subtitle = subtitle;
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
