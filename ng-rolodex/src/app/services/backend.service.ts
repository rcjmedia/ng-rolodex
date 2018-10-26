import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    baseUrl: string = 'https://swapi.co/api/';
    // nbaUrl: string = 'http://data.nba.net/10s/prod/v1/20181020/scoreboard.json';

    characters: any[] = [];

    constructor(private http: HttpClient) {  }

    getCharacter(id: number) {
        const url = this.baseUrl + 'people/' + id;
        return this.http.get(url).toPromise();
    }

    getPlanets(id: number) {
        const url = this.baseUrl + 'planets/' + id;
        return this.http.get(url).toPromise();
    }

    addCharacters(character) {
        this.characters.push(character);
    }

    register(data) {
        return Promise.resolve({});
    }

    login(data) {
        return Promise.resolve({ username: data.username });
    }

    logout() {
        return Promise.resolve({});
    }

    // getNbaGames() {
    //     const url = this.nbaUrl;
    //     return this.http.get(url).toPromise();
    // }

}