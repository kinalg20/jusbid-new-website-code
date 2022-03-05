import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetHotelAmenityAction, GetRoomAmenityAction } from '../store/actions/hotelamenity.action';
import { HotelAmenityState } from '../store/state/hotelamenity.state';
import { RoomAmenityState } from '../store/state/roomamenity.state';

@Injectable({
  providedIn: 'root'
})
export class AminitydataService {
  hotelAmenityData: any;
  RoomAmenitiesData: any;
  @Select(HotelAmenityState.getHotelAminity) hotelAmenityData$!: Observable<any>;
  @Select(HotelAmenityState.isHotelsAminityLoaded) hotelAmenityDataLoaded$!: Observable<boolean>;
  @Select(RoomAmenityState.getRoomAminity) roomAmenityData$!: Observable<any>;
  @Select(RoomAmenityState.isRoomsAminityLoaded) roomAmenityDataLoaded$!: Observable<boolean>;
  constructor(private store: Store) { }
  ngOnInit() {
  }
  getAllHotelAmenities() {
    this.hotelAmenityData = this.hotelAmenityDataLoaded$.subscribe(res => {
      if (!res) {
        console.log(res);
        this.store.dispatch(new GetHotelAmenityAction());
      }
    })
  }

  getAllRoomAmenities() {
    this.RoomAmenitiesData = this.roomAmenityDataLoaded$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetRoomAmenityAction());
      }
    })
  }
}
