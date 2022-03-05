import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isShowHomeHeader: boolean = true;
  addShadow:boolean = false;

  constructor() { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    // console.log(window.pageYOffset);

    if (window.pageYOffset >= 100) {
      this.isShowHomeHeader = false;
      this.addShadow = true;
    } else {
      this.isShowHomeHeader = true;
      this.addShadow = false;
    }
  }

  ngOnInit(): void { }


}
