import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-slider1",
  templateUrl: "./slider1.component.html",
  styleUrls: ["./slider1.component.scss"],
})
export class Slider1Component implements OnInit {
  @Input() content: any = {
    heading: "",
    sub_heading: "",
    data: [],
  };
  @ViewChild("slides") slides: any;

  slideOpts = {
    breakpoints: {
      325: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  };

  products: any = [];
  constructor(private router: Router) {}

  gotoList() {
    this.router.navigateByUrl("/hotels/hotel-search");
  }
  ngOnInit(): void {}

  disabled_back: boolean = true;
  disabled_next: boolean = false;

  slideChanged() {
    this.slides
      .getActiveIndex()
      .then((index: number) => {
        if (index === 0) {
          this.disabled_back = true;
          this.disabled_next = false;
        } else if (index === this.content.data.length - 4) {
          this.disabled_back = false;
          this.disabled_next = true;
        } else {
          this.disabled_back = false;
          this.disabled_next = false;
        }
      })
      .catch((err: any) => console.log(err));
  }
}
