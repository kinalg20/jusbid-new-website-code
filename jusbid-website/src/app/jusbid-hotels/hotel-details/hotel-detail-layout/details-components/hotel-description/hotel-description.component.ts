import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-description',
  templateUrl: './hotel-description.component.html',
  styleUrls: ['./hotel-description.component.scss']
})
export class HotelDescriptionComponent implements OnInit {
  @Input() hotelDescDetail: any = {};
  isReadMore:boolean = false;
  constructor() { }

  ngOnInit(): void { }

  hotel_desc_len : number=300;
  showMoreHotelDesc(hotel_desc:any){
    let len = hotel_desc.length;
    this.isReadMore=!this.isReadMore;
    this.hotel_desc_len = this.isReadMore? len : 300
  }
  

}
