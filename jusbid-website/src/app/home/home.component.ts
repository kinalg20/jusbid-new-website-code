import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-flights",
  template: `
    <app-header
      [isHome]="isShowHomeHeader"
      [isSearchForm]="false"
      [isShowMenuList]="isShowMenuList"
      [isShowSearchForm]="isShowSearchForm"
      [addShadow]="addShadow"
      [bgColor]="bgColor"
    ></app-header>
    <app-home-top-header> </app-home-top-header>
    <main>
    <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      main{
        margin-top: 0;
      }
      .header-image {
        position: relative;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  isShowHomeHeader: boolean = true;
  isShowMenuList: boolean = false;
  addShadow: boolean = false;
  isShowSearchForm: boolean = false;
  bgColor: string = "transparent";

  constructor(private router: Router) {}

  @HostListener("window:scroll", ["$event"]) onScrollEvent($event: any) {
    // console.log(window.pageYOffset);

    if (window.pageYOffset >= 400) {
      this.isShowHomeHeader = false;
      this.addShadow = true;
      this.isShowMenuList = true;
      this.bgColor = "white";
    } else {
      this.isShowHomeHeader = true;
      this.addShadow = false;
      this.isShowMenuList = false;
      this.bgColor = "transparent";
    }

    // For Search Form
    if (window.pageYOffset >= 400) {
      this.isShowSearchForm = true;
    } else {
      this.isShowSearchForm = false;
    }
  }

  ngOnInit(): void {}
}
