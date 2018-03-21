import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pageId = 'recipe';

  onNavigate(pageId: string) {
    this.pageId = pageId;
  }
}
