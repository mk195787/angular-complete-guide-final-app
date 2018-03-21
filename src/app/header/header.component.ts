import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick(pageId: string) {
    this.navigate.emit(pageId);
  }
}
