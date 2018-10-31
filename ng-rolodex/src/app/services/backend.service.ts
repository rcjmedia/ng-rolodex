import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

  baseUrl: string = 'http://localhost:9090/routes/';

  accounts: any[] = [];
  contacts: any[] = [];
  usernames: any[] = [];

  constructor(private http: HttpClient) { }

  getAccounts() {
    const url = this.baseUrl + 'accounts/';
    return this.http.get(url).toPromise();
  }

  getContacts() {
    const url = this.baseUrl + 'contacts/';
    return this.http.get(url).toPromise();
  }

  getUsernames() {
    const url = this.baseUrl + 'usernames/';
    return this.http.get(url).toPromise();
  }

  // addCharacters(character) {
  //   console.log('character', character)
  //   this.characters.push(character);
  // }

  // addPlanets(planet) {
  //   console.log('planet', planet)
  //   this.planets.push(planet);
  // }

  register(data) {
    return Promise.resolve({});
  }

  login(data) {
    return Promise.resolve({ username: data.username });
  }

  logout() {
    return Promise.resolve({});
  }

}