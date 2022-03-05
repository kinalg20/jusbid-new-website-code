import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-layout',
  template: `
  <app-header [isHome]="false"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [``]
})
export class checkoutLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
