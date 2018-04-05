import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageId = 'recipe';

  onNavigate(pageId: string) {
    this.pageId = pageId;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBOMHGljdtpjkQqpwzsQvOSsWCAYu7yCMA',
      authDomain: 'ng-recipe-book-9ca78.firebaseapp.com',
    });
  }
}
