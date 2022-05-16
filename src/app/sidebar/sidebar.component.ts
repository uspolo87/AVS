import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  activeElement: string = 'dashboard';

  constructor() {}

  ngOnInit(): void {}

  setActive(ele: string) {
    this.activeElement = ele;
  }
}
