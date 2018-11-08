import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'viewallcontacts-page',
  templateUrl: './viewallcontacts.component.html',
  styleUrls: ['./viewallcontacts.component.scss']
})

export class ViewAllContactsComponent implements OnInit {

  contact: string = 'Contacts';
  contacts: any[];
  
  constructor(private backend: BackendService, private http: HttpClient) { 
    this.contacts = [] 
  }

  // Notes for creating sorting function:
  // Per project requirement, There should be a list of contacts in alphabetical order -
  // Jason Sewell
  // Jason Statham
  // Jason Voorhees
  // Since we have an array of contacts, create a function name 
  // "alphaSort" then give it an argument "result" then use it as result.sort
  // then pass an ES6 style function that takes arguments a and b and compare them
  // It should return something negative if first argument is less 
  // than second (should be placed before the second in resulting array)
  // something positive if first argument is greater (should be placed after second one)
  // then return 0 if those two elements are equal.
  // In our case if two elements are a and b we want to compare a.first_name and b.first_name
   alphaSort(result) {
    this.contacts = result.sort((a, b) => {
      if(a.name < b.name) { 
        return -1; 
      }
      if(a.name > b.name) { 
        return 1; 
      }
      return 0;
    });
  }

  ngOnInit() {     
    this.backend.getContacts()
      .then(result => {
        this.alphaSort(result)
      })
      
  } // ngOnInit
} // export class