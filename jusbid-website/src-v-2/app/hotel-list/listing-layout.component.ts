import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-layout',
  template: `
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  `,
  styles: [``]
})
export class ListingLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
