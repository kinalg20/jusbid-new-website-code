import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotels-reviews',
  templateUrl: './hotels-reviews.component.html',
  styleUrls: ['./hotels-reviews.component.scss']
})
export class HotelsReviewsComponent implements OnInit {

  constructor() { }
  isOpenRatingModel: boolean = false;
  ngOnInit(): void {
  }

  openRatingModel() {
    this.isOpenRatingModel = !this.isOpenRatingModel
  }

  closeRatingModel(event:boolean) {
    this.isOpenRatingModel = event;
  }

}
