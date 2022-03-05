import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "src/app/_services/api.service";

@Component({
  selector: "popular-destination",
  templateUrl: "./popular-destination.component.html",
  styleUrls: ["./popular-destination.component.scss"],
})
export class PopularDestinationComponent implements OnInit {
  @ViewChild("slides") slides: any;
  disablePrevBtn = true;
  disableNextBtn = false;
  slideOpts = {
    breakpoints: {
      // when window width is <= 320px
      325: {
        slidesPerView: 1,
        // spaceBetween: 10
      },
      650: {
        slidesPerView: 2,
        // spaceBetween: 10
      },
      // when window width is <= 480px
      800: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
      // when window width is <= 640px
      1000: {
        slidesPerView: 4,
        // spaceBetween: 30
      }
    }
  };
 


  Items: any = [
    {
      previewImageSrc:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      cities: "Banglore",
    },
    {
      previewImageSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/183190614.jpg?k=2471490126e826bfa463bc8f7b731e52f15a146dac72ea8db492f83f2aaa2db5&o=&hp=1",
      cities: "Jaipur",
    },
    {
      previewImageSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/183190562.jpg?k=f948adfb21c4726d49036e67941281650c64968e13a86f8d50a76a3c5b0ffa12&o=&hp=1",
      cities: "Indore",
    },
    {
      previewImageSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/217236200.jpg?k=4033f79ae32c3671e0b28f72165d0e741921bf2ea0e2a83501abe2e3038c39d7&o=&hp=1",
      cities: "Ahemdabad",
    },
    {
      previewImageSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/239071316.jpg?k=f133d2887e91a8ac40241ee5e13ae4a732b5b48b0e8d68f8a519704c6275d217&o=&hp=1",
      cities: "Jaisalmer",
    },
    {
      previewImageSrc:
        "https://images.unsplash.com/photo-1566450653303-2614cbb292ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emFhbnNlJTIwc2NoYW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      cities: "Mumbai",
    },

    {
      previewImageSrc:
        "https://media.istockphoto.com/photos/colorful-district-in-groningen-picture-id1294580904?b=1&k=20&m=1294580904&s=170667a&w=0&h=d06ZdPTcsIhw4KPhtrg-quyfhs2z30j-dZP1ulqTaCM=",
      cities: "Delhi",
    },
    {
      previewImageSrc:
        "https://images.unsplash.com/photo-1610569244414-5e7453a447a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80",
      cities: "Udaipur",
    },
    {
      previewImageSrc:
        "https://images.unsplash.com/photo-1592501986002-1b84e645f3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVyYW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      cities: "Ajmer",
    },
    {
      previewImageSrc:
        "https://images.unsplash.com/photo-1592109727124-92bc2c03a5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
      cities: "Kota",
    },
    {
      previewImageSrc: "https://wallpaper.dog/large/17138252.png",
      cities: "Alwar",
    },
  ];
  constructor() { }

  prevSlide() {
    this.slides.slidePrev();
  }
  nextSlide() {
    this.slides.slideNext();
  }
  ngOnInit(): void { 
  }
}
