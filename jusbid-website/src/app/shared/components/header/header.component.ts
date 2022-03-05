import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() isShowOnHomePage: boolean = true;
  @Input() isHome: boolean = true;
  @Input() addShadow: boolean = true;
  @Input() isSearchForm: boolean = true;
  @Input() isShowMenuList: boolean = false;
  @Input() isShowSearchForm: boolean = true;
  @Input() bgColor: string = "white";

  searchLocation: any;
  isShowSideBar: boolean = false;

  dateValue = "";
  dateValue2 = "";
  today: Date = new Date();
  tomorrow: Date = new Date();
  rangeDates: any;
  user: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    let userViaOAuth = localStorage.getItem("GoogleOAuth_USER");
    if (userViaOAuth) {
      this.user = {
        firstname: JSON.parse(userViaOAuth).firstName,
        ...JSON.parse(userViaOAuth),
      };
    }
  }

  gotoHome() {
    this.router.navigate(["/"]);
  }

  gotoAuth() {
    this.router.navigate(["/auth"]);
  }

  closeSiderbar(close: boolean) {
    this.isShowSideBar = close;
  }
}
