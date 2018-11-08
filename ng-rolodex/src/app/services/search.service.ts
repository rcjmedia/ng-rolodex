// import { NgAisModule } from 'angular-instantsearch';

// @NgModule({
//   declarations: [OtherComponent, ...],
//   imports: [NgAisModule, ...]
// })
// export class OtherModule {}

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable, of } from 'rxjs';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
// import "rxjs/Rx";

// @Injectable()
// export class SearchService {
//   baseUrl: string = 'https://api.cdnjs.com/libraries';
//   queryUrl: string = '?search=';

//   constructor(private http: Http) { }

//   search(terms: Observable<string>) {
//     return terms.debounceTime(400)
//       .distinctUntilChanged()
//       .switchMap(term => this.searchEntries(term));
//   }

//   searchEntries(term) {
//     return this.http
//         .get(this.baseUrl + this.queryUrl + term)
//         .map(res => res.json());
//   }
// }