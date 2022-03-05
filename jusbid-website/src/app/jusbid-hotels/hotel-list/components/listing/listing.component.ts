import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetHotelAction } from 'src/app/store/actions/hotel.action';
import { HotelState } from 'src/app/store/state/hotel.state';
import { AminitydataService } from 'src/app/_services/aminitydata.service'
import { UtilityService } from 'src/app/_services/utility.service';

interface popularity {
  name: string
}
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  getValue: any;
  hotels: any = [];
  hotelId: any = [];
  rangeValues: number[] = [];
  allAmenitiesData: any = [];
  loading = false;
  error = false;
  isAlive = true;
  hotelsListData: any;
  popularity!: popularity[];
  selectedPopularity!: popularity;

  @Select(HotelState.getHotelList) apiData$!: Observable<any>;
  @Select(HotelState.isHotelsLoaded) apiDataLoaded$!: Observable<boolean>;

  searchQueryParams: any = {};
  constructor(private route: ActivatedRoute, private store: Store, private _aminityService: AminitydataService, private _utilities: UtilityService) {
    this.popularity = [
      { name: "Price low to high" },
      { name: "Price high to low" },
    ];
  }

  ngOnInit(): void {
    this.copyArray();
    // https://www.jusbid.in/hotel-search?location=Delhi%2C%20India&city=Delhi&searchType=city&checkin=10%2F01%2F2022&checkout=11%2F01%2F2022&rooms=1&guests=1&cityId=2&filters%5Bcity_id%5D=2
    this.route.queryParams.subscribe(params => {
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
    this.getDataFromState();
    this.apiData$.subscribe(res => {
      if (res.data) {
        this.hotels = res.data;
      }
    });
  }
  copyArray() {
    setTimeout(() => {
      this.hotelId = this.hotels;
    }, 100);;
  }

  getDataFromState() {
    this.hotelsListData = this.apiDataLoaded$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetHotelAction());
      }
    });
  }
  ngOnDestroy(): void {
    this.isAlive = false;
    this.hotelsListData.unsubscribe();
  }

  //get hoteldata after search hotel name in search bar 
  onClick() {
    if (this.selectedPopularity == undefined) {
      if (this.getValue != undefined) {
        this.hotelId = [];
        this.hotels.map((res: any) => {
          if (res.name.toLowerCase().indexOf(this.getValue.toLowerCase()) > -1) {
            if (!this.hotelId.includes(res)) {
              this.hotelId.push(res);
            }
          }
        })
      }
    }
    else {
      if (this.getValue != undefined) {
        this.hotelId = [];
        this.hotels.map((res: any) => {
          if (res.name.toLowerCase().indexOf(this.getValue.toLowerCase()) > -1) {
            if (!this.hotelId.includes(res)) {
              this.hotelId.push(res);
              this.getDropdown();
            }
          }
        })
      }
    }
  }
  getDropdown() {
    if (this.hotelId.length == this.hotels.length) {
      if (this.selectedPopularity == this.popularity[0]) {
        this.hotelId = this.hotels.sort((a: any, b: any) => a.room_price - b.room_price)
      }
      else {
        this.hotelId = this.hotels.sort((a: any, b: any) => b.room_price - a.room_price)
      }
    }
    else {
      if (this.selectedPopularity == this.popularity[0]) {
        this.hotelId = this.hotelId.sort((a: any, b: any) => a.room_price - b.room_price)
      }
      else {
        this.hotelId = this.hotelId.sort((a: any, b: any) => b.room_price - a.room_price)
      }
    }
  }
  getRangeValue(res:any){
    console.log(res);
  }
}