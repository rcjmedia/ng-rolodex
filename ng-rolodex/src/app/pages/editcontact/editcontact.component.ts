import { Component, OnInit } from '@angular/core';
// import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss']
})
export class EditcontactComponent implements OnInit {
  user: {};
  contact: {};
  contactId: string;
  editing: boolean = false;
  isLoggedIn: boolean;

  editFormData: {
    name: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string;
    created_by: string;
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
    created_by: '',
  }

  constructor(
    private backend: BackendService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contact= {};
    this.contactId = this.activatedRoute.snapshot.paramMap.get('id');
    return this.backend.getOneContact(this.contactId)
    .then(contact => {
      console.log('contact :', contact);
      this.contact = contact[0];
      this.editFormData = contact[0];
    })
  }

  toggleEdit() {
    if (this.editing) {
      return this.editing = false;
    } else {
      return this.editing = true;
      
    }
  }

  submitContactEdit() {
    // trying to get the username value from the session and insert the value
    // in editFormData.created_by
    // this.editFormData.created_by = this.session.user.username
    return this.backend.submitContactEdit(this.editFormData, this.contactId)
    .then(editedContact => {
      this.contact = editedContact;
      this.toggleEdit();
    })
  }
  
}