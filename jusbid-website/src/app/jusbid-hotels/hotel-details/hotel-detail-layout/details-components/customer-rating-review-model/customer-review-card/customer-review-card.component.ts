import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-review-card',
  templateUrl: './customer-review-card.component.html',
  styleUrls: ['./customer-review-card.component.scss']
})
export class CustomerReviewCardComponent implements OnInit {

  @Input() data:any;
  isReadMore:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
