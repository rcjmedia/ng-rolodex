import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = 'This is awesome';
  subtitle: string;
  data: {
    header: string
  } = {
    header: 'THIS IS THE HEADERS'
  };

//   constructor(private backend: BackendService) {
//     const subtitle: string = 'This is really awesome';

//     this .subtitle = subtitle;

// }

  ngOnInit() {

  }

}
