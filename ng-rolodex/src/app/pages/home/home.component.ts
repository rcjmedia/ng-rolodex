import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
