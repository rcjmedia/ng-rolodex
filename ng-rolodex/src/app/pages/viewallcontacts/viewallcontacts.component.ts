import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'viewallcontacts-page',
  templateUrl: './viewallcontacts.component.html',
  styleUrls: ['./viewallcontacts.component.scss']
})

export class ViewAllContactsComponent implements OnInit {

  contact: string = 'Contacts';
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

  accounts: any[];
  contacts: any[];
  usernames: any[];

  constructor(private backend: BackendService) {
    const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';

    this.data.content = 'this.data.content in constructor'
    this .subtitle = subtitle;
   }

  ngOnInit() {     
    this.accounts = this.backend.accounts;
    this.contacts = this.backend.contacts;
    this.usernames = this.backend.usernames;
    
    for(let i=0; i<2; i++){
      this.backend.getAccounts()
      .then((data) => {
        console.log(data);
        this.accounts.push(data)
      });
    }

    for(let j=0; j<2; j++){
      this.backend.getUsernames()
      .then((data) => {
        console.log(data);
        this.usernames.push(data)
      });
    }

    for(let k=0; k<2; k++){
      this.backend.getContacts()
      .then((data) => {
        console.log(data);
        this.contacts.push(data)
      });
    }
  } // ngOnInit
} // export class

