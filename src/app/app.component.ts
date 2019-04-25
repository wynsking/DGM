import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyAJkjevYzXoumcAt3muCD_HAMbP3O0lOi8",
      authDomain: "bookshelves-29ad6.firebaseapp.com",
      databaseURL: "https://bookshelves-29ad6.firebaseio.com",
      projectId: "bookshelves-29ad6",
      storageBucket: "",
      messagingSenderId: "953743229106"
    };
    firebase.initializeApp(config);
  }
}
