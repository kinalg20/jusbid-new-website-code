import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { GetHotelAction } from 'src/app/store/actions/hotel.action';
import { HotelState } from 'src/app/store/state/hotel.state';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  hotels: any = [];
  loading = false;
  error = false;
  isAlive = true;

  hotelsListData: any;

  @Select(HotelState.getHotelList) apiData$!: Observable<any>;
  @Select(HotelState.isHotelsLoaded) apiDataLoaded$!: Observable<boolean>;

  searchQueryParams: any = {};

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    // https://www.jusbid.in/hotel-search?location=Delhi%2C%20India&city=Delhi&searchType=city&checkin=10%2F01%2F2022&checkout=11%2F01%2F2022&rooms=1&guests=1&cityId=2&filters%5Bcity_id%5D=2
    this.route.queryParams.subscribe(params => {
      // console.log("Query Params:===>", params);
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
      console.log("Hotel data from state:", res);
      if(res.data){
        this.hotels = res.data.slice(0,20);
      }
    });
  }

  getDataFromState() {
    this.hotelsListData = this.apiDataLoaded$.subscribe(res => {
      // console.log("Hotel data from state: isloaded", res);
      if (!res) {
        this.store.dispatch(new GetHotelAction())
      }
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
    this.hotelsListData.unsubscribe();
  }

}
