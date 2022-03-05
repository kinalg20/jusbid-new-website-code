import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-layout',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class ListingLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
