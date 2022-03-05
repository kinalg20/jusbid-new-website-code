import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/_services/utility.service';
import { Router } from '@angular/router';
import { AminitydataService } from 'src/app/_services/aminitydata.service'

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() hotelData: any = [];
  hotelAmenityData: any;
  hotelDetaildata: any;
  fetchedHotelAmenityData: any = [];
  constructor(private _utilService: UtilityService, private router: Router, private _aminityService: AminitydataService) { }
  ngOnInit(): void {
    this._utilService.hotelAminities.subscribe({
      next: (grca) => {
        if (grca) {
          this.hotelAmenityData = grca;
        }
      }
    });
    this.fetchedHotelAmenity();
  }

  getImageUrl(path: string): string {
    return `https://jusbid.in:1337/${path}`;
  }

  getLocation(lat: any, lng: any): string {
    this._utilService.getGeoLocation(lat, lng);
    return "Address location";
  }

  getHotelDetail(hotelid: any) {
    this.router.navigate(['/hotels/' + hotelid]);
  }
  fetchedHotelAmenity() {
    this.hotelData.hotel_amenities.map((res: any) => {
      this.fetchedHotelAmenityData.push(this._utilService.getDataByAttr(this.hotelAmenityData, "id", res));
    })
  }
}
