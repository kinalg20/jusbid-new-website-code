import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-detail-layout',
  templateUrl: './hotel-detail-layout.component.html',
  styleUrls: ['./hotel-detail-layout.component.scss']
})
export class HotelDetailLayoutComponent implements OnInit {

  searchQueryParams: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // https://www.jusbid.in/hotel-search?location=Delhi%2C%20India&city=Delhi&searchType=city&checkin=10%2F01%2F2022&checkout=11%2F01%2F2022&rooms=1&guests=1&cityId=2&filters%5Bcity_id%5D=2
    this.route.queryParams.subscribe(params => {
      console.log("Query Params:===>", params);
      this.searchQueryParams = {
        location: params.location,
        city: params.city,
        searchType: params.searchType,
        checkin: params.checkin,
        checkout: params.checkout,
        rooms: params.rooms,
        guests: params.guests,
        cityId: params.cityId,
        filters: params.filters,
        city_id: params.city_id,
      }
    });

    let hotelId = this.route.snapshot.params.id;
    console.log("Hotel ID:", hotelId)

  }

}
