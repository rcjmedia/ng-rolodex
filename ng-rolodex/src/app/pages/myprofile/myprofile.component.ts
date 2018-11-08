// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BackendService } from '../../services/backend.service';

// @Component({
//   selector: 'myprofile-page',
//   templateUrl: './myprofile.component.html',
//   styleUrls: ['./myprofile.component.scss']
// })

// export class MyProfileComponent implements OnInit {
//   title: string = 'User Profile!';
//   users: string;
//   name: string;
//   email: string;
//   address: string;
//   userData: any;

//   constructor(private backend: BackendService, private http: HttpClient) { }

//   ngOnInit() {
//     let obs = this.http.get('http://localhost:9090/api/users/');
//     obs.subscribe((response) => console.log('Got the response!', response));

//   }
// }
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'myprofile-page',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class MyProfileComponent {
  uri = 'http://localhost:9090';
  constructor(private http: HttpClient) { }

  addIssue(username, name, email, address, password) {

    const issue = {
      username: username,
      name: name,
      email: email,
      address: address,
      password: password
    };
    return this.http.post(`${this.uri}/api/users`, issue);
  }

  getIssues() {
    return this.http.get(`${this.uri}/api/users`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/api/users/${id}`);
  }

  updateIssue(id, username, name, email, address, password) {
    const issue = {
      username: username,
      name: name,
      email: email,
      address: address,
      password: password
    };
    return this.http.post(`${this.uri}/api/users/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/api/users/delete/${id}`);
  }

ngOnInit() {
  let obs = this.http.get(`${this.uri}/api/users`);
  obs.subscribe((allUsers) => console.log('Give me allUsers!', allUsers));
  
  // let obsPost = this.http.post(`${this.uri}/api/users`);
  // obsPost.subscribe((allUsers) => console.log('Give me allUsers!', allUsers));

}

}