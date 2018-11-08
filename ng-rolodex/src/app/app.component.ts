import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rolodex';

  constructor(private svc: BackendService, private http: HttpClient) {
    // this.svc.printToConsole("Got the service!!")
  }

  ngOnInit() {
    // let obs = this.http.get('http://localhost:9090/api/contacts/2');
    // obs.subscribe((response) => console.log('Got the response!', response));
  }

}
