import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'viewallcontacts-page',
  templateUrl: './viewallcontacts.component.html',
  styleUrls: ['./viewallcontacts.component.scss']
})

export class ViewAllContactsComponent implements OnInit {

  planet: string = 'PLANETS';
  people: string = 'PEOPLE';
  title: string = 'title: single line output';
  subtitle: string;
  data: {
    search: string,
    header: string,
    content: string,
    class: string,
  } = {
    search: 'Search for a contact...',
    header: 'data.header info',
    content: 'data.content info',
    class: 'search',
  };
  
  formData: {
    name: string,
    email: string,
    class: string,
  } = {
    name: '',
    email: '',
    class: 'test',
  }

  planets: any[];

  characters: any[]

  constructor(private backend: BackendService) {
    const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';

    this.data.content = 'this.data.content in constructor'
    this .subtitle = subtitle;
   }

  ngOnInit() {     
    this.characters = this.backend.characters;
    /*  */
    // this.backend.addCharacters({ 
    //   name: '', 
    //   height: , 
    //   mass: , 
    //   hair_color: '', 
    //   eye_color: '', 
    //   species: '', 
    //   character: '',
    //   homeworld: ''
    // });

    this.planets = this.backend.planets;
    // this.backend.addPlanets({ 
    //   name: '', 
    //   terrain: '', 
    //   population: '', 
    //   url: ''
    // });
    
    for(let i=1; i<10; i++){
      this.backend.getCharacter(i)
      .then((data) => {
        console.log(data);
        this.characters.push(data)
      });
    }

    for(let j=1; j<10; j++){
      this.backend.getPlanet(j)
      .then((data) => {
        console.log(data);
        this.planets.push(data)
      });
    }
  } // ngOnInit
} // export class

