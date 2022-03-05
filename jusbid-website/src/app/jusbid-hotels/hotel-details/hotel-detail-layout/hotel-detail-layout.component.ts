import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetHotelDetailAction } from 'src/app/store/actions/hoteldetail.action';
import { HotelDetailState } from 'src/app/store/state/hoteldetail.state';
import { AminitydataService } from 'src/app/_services/aminitydata.service';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';
@Component({
  selector: 'app-hotel-detail-layout',
  templateUrl: './hotel-detail-layout.component.html',
  styleUrls: ['./hotel-detail-layout.component.scss']
})
export class HotelDetailLayoutComponent implements OnInit {
  searchQueryParams: any = {};
  hotelId: any;
  @Select(HotelDetailState.getHotelDetail) hotelDetailData$!: Observable<any>;
  @Select(HotelDetailState.isHotelsLoaded) hotelDetailDataLoaded$!: Observable<boolean>;
  hotelsDetailData: any;
  hotelDetaildata: any;
  HotelFetchedData: any;
  HotelDetails: any = {};

  hotelDetailObj: any = {
    Amenities: [],
    FAQ: [],
    Feedback: [],
    HotelOtherInfo: [],
    RatingsData: [],
    hotel_amenities: [],
    hotel_images: [],
    hotel_rooms: [],
    hotel_views: [],
    recommended_hotels: [],
    seasonal_months: [],
    data: {}
  }

  constructor(private route: ActivatedRoute, private store: Store, private utility: UtilityService, private amenity: AminitydataService, private dataService: DataService) {
  }
  ngOnInit(): void {
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

    this.hotelId = this.route.snapshot.params.id;
    this.getDataFromState();
    this.hotelDetailData$.subscribe(res => {
      if (res.data) {
        this.HotelDetails = this.utility.getDataByAttr(res.data, 'id', this.hotelId);
        if (this.HotelDetails) {
          this.hotelDetailObj = {
            Amenities: this.HotelDetails.Amenities,
            FAQ: this.HotelDetails.FAQ,
            Feedback: this.HotelDetails.Feedback,
            HotelOtherInfo: this.HotelDetails.HotelOtherInfo,
            RatingsData: this.HotelDetails.RatingsData,
            hotel_amenities: this.HotelDetails.hotel_amenities,
            hotel_images: this.HotelDetails.hotel_images,
            hotel_rooms: this.HotelDetails.hotel_rooms,
            hotel_views: this.HotelDetails.hotel_views,
            recommended_hotels: this.HotelDetails.recommended_hotels,
            seasonal_months: this.HotelDetails.seasonal_months,
            data: this.HotelDetails
          }
          let defaultSelectedRoom = this.hotelDetailObj.hotel_rooms ? this.hotelDetailObj.hotel_rooms[0] : {};
          this.dataService.selectedHotelRoom.next(defaultSelectedRoom);
        }
      }
    });

    console.log(this.hotelDetailObj);

  }

  getDataFromState() {
    this.hotelDetaildata = this.hotelDetailDataLoaded$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetHotelDetailAction());
      }
    });
  }

  ngOnDestroy(): void {
    this.hotelDetaildata.unsubscribe();
  }


  getSelectedRoom(selectedRoom: any) {
    this.dataService.selectedHotelRoom.next(selectedRoom);
  }

}
