import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-slider3",
  templateUrl: "./slider3.component.html",
  styleUrls: ["./slider3.component.scss"],
})
export class Slider3Component implements OnInit {
  @Input() content: any = {
    heading: "",
    sub_heading: "",
    data: [],
  };

  @ViewChild("slides") slides: any;

  disabled_back: boolean = true;
  disabled_next: boolean = false;

  slideOpts = {
    breakpoints: {
      325: {
        slidesPerView : 1,
      },
      450: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}

  slideChanged() {
    this.slides
      .getActiveIndex()
      .then((index: number) => {
        if (index === 0) {
          this.disabled_back = true;
          this.disabled_next = false;
        } else if (index === this.content.data.length - 5) {
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
