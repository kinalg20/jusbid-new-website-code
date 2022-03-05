import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recommendation-hotels',
  templateUrl: './recommendation-hotels.component.html',
  styleUrls: ['./recommendation-hotels.component.scss']
})
export class RecommendationHotelsComponent implements OnInit {
  responsiveOptions: any;
  @Input() recommendationHotel: any = {};
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }

  slideOpts = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
  };


  @ViewChild("slides") slides: any;
  disablePrevBtn = true;
  disableNextBtn = false;
  prevSlide() {
    this.slides.slidePrev();
  }
  nextSlide() {
    this.slides.slideNext();
  }

  gotoList() {
    this.router.navigateByUrl("/hotels/hotel-search");
  }
}
