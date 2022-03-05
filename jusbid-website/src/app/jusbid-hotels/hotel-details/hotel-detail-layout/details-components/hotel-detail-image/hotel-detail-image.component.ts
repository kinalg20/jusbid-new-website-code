import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-detail-image',
  templateUrl: './hotel-detail-image.component.html',
  styleUrls: ['./hotel-detail-image.component.scss']
})
export class HotelDetailImageComponent implements OnInit {
  @Input() hotelImageDetail:any={};
  isShow360View: boolean = false;
  constructor() { }

  ngOnInit(): void {}

  
  getImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }


}
