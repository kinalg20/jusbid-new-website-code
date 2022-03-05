import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isShowSideBar: boolean = false;
  @Output() closeSiderbar = new EventEmitter<boolean>();

  href: string = '/';

  sideMenuList: any = [
    {
      name: "Home",
      route: "/",
      slug: "/"
    },
    {
      name: "Recent Bids",
      route: "/",
      slug: "/recent-bids"
    },
    {
      name: "Recent Bookings",
      route: "/",
      slug: "/recent-bookings"
    },
    {
      name: "Notifications",
      route: "/",
      slug: "/notifications"
    },
    {
      name: "Settings",
      route: "/",
      slug: "/settings"
    },
    {
      name: "My Account",
      route: "/",
      slug: "/my-account"
    },
    {
      name: "Terms & Conditions",
      route: "/",
      slug: "/terms-and-conditions"
    },
    {
      name: "Privacy Policy",
      route: "/",
      slug: "/privacy-policy"
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }

  closeSiderBar(close: boolean) {
    this.closeSiderbar.emit(close);
  }
}
