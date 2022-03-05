import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'recommended-hotel-card',
  templateUrl: './recommended-hotel-card.component.html',
  styleUrls: ['./recommended-hotel-card.component.scss']
})
export class RecommendedHotelCardComponent implements OnInit {
  @Input() recommendedCard:any={};
  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }

}
