import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer-profile-layout",
  template: `
    <app-header [isHome]="false"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [``],
})
export class CustomerProfileLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
