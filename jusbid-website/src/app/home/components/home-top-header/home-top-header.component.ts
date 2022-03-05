import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-header',
  templateUrl: './home-top-header.component.html',
  styleUrls: ['./home-top-header.component.scss']
})
export class HomeTopHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getActivePage(page: string) {
    console.log("Active page is:", page);
  }
}
