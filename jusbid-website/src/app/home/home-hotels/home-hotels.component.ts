import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/_services/data.service";
@Component({
  selector: "app-home-hotels",
  templateUrl: "./home-hotels.component.html",
  styleUrls: ["./home-hotels.component.scss"],
})
export class HomeHotelsComponent implements OnInit {
  @ViewChild("slides") slides: any;
  isShowHomeHeader: boolean = true;
  isShowMenuList: boolean = false;
  addShadow: boolean = false;
  bgColor: string = "transparent";
  city_name = [
    { id: 1, cityname: "Udaipur" },
    { id: 2, cityname: "Jaipur" },
    { id: 3, cityname: "Delhi" },
    { id: 4, cityname: "Mumbai" },
    { id: 5, cityname: "Indore" },
    { id: 6, cityname: "Banglore" },
    { id: 7, cityname: "Kolkata" },
    { id: 8, cityname: "Ahemdabad" },
    { id: 9, cityname: "Jodhpur" },
    { id: 10, cityname: "Goa" },
  ];
  slideOpts = {
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
    },
  };

  slider1: any = {
    heading: "Popular Destination",
    sub_heading: "Verified homes for sale",
    data: this.dataservice.getPopularDestination(),
  };
  slider2: any = {
    heading: "Discover Jusbid Experiences",
    sub_heading: "Verified homes for sale",
    data: this.dataservice.getBlogsData(),
  };
  slider3: any = {
    heading: "Handpicked Popular Hotels",
    sub_heading: "Verified homes for sale",
    data: this.dataservice.getPopularHotel(),
  };

  constructor(public dataservice: DataService) {}
  nextSlide() {
    this.slides.slideNext();
  }
  prevSlide() {
    this.slides.slidePrev();
  }

  @HostListener("window:scroll", ["$event"]) onScrollEvent($event: any) {
    // console.log(window.pageYOffset);

    if (window.pageYOffset >= 100) {
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
  }
  ngOnInit(): void {}
}
