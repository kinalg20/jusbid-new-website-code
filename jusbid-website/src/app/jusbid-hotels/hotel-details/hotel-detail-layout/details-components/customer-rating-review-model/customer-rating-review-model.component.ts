import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customer-rating-review-model',
  templateUrl: './customer-rating-review-model.component.html',
  styleUrls: ['./customer-rating-review-model.component.scss']
})
export class CustomerRatingReviewModelComponent implements OnInit {
  @Output() isCloseReviewModel = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  closeReviewModel(close: boolean) {
    this.isCloseReviewModel.emit(close);
  }
  isReadMore = true

  showText() {
    this.isReadMore = !this.isReadMore
  }

  customerRating = [
    {
      id: 1,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 2,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 3,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 4,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 5,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 6,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 7,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    },
    {
      id: 8,
      customer_name: 'Kinal Kukda',
      date: 'January 2022 .Last minute trip',
      rating_desc: 'Great place. Just need to keep in mind location because private cars are not permitted and need to walk down in city lanes.'
    }
  ]

}
