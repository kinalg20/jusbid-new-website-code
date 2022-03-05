import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-slider2",
  templateUrl: "./slider2.component.html",
  styleUrls: ["./slider2.component.scss"],
})
export class Slider2Component implements OnInit {
  @Input() content: any = {
    heading: "",
    sub_heading: "",
    data: [],
  };

  @ViewChild("slides") slides: any;
  isShowHomeHeader: boolean = true;
  isShowMenuList: boolean = false;
  addShadow: boolean = false;
  bgColor: string = "transparent";
  slideOpts = {
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };
  constructor() {}
  ngOnInit(): void {}

  disabled_back: boolean = true;
  disabled_next: boolean = false;
  getNextIndex(event: any) {}

  slideChanged() {
    this.slides
      .getActiveIndex()
      .then((index: number) => {
        if (index === 0) {
          this.disabled_back = true;
          this.disabled_next = false;
        } else if (index === this.content.data.length-2) {
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
