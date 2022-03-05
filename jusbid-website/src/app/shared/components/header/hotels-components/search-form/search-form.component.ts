import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';
@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchLocation: any;
  // isShowSideBar: boolean = false;

  dateValue = '';
  dateValue2 = '';
  today: Date = new Date();
  tomorrow: Date = new Date();
  rangeDates: any;
  guests_n_rooms_picker_toggle: boolean = false;
  totalRoomGuestCount: any = {
    roomQty: 1,
    guestQty: 1
  };

  user: any = {};

  userCurrentLocation: any = {};



  constructor(private router: Router, private utilityService: UtilityService, private dataSerivce: DataService) { }

  ngOnInit(): void {
    // Active date
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.rangeDates = [this.today, this.tomorrow];
    // Store guestRoomCounts
    this.utilityService.guestRoomCounts.subscribe({
      next: (grca) => {
        if (grca.roomQty && grca.guestQty) {
          this.totalRoomGuestCount = {
            roomQty: grca.roomQty,
            guestQty: grca.guestQty

          };
        }

      }
    });


    // Store logedin user
    this.dataSerivce.loginedUserSubject.subscribe({
      next: (user) => {
        if (user) { this.user = user; }
      }
    });

    this.updateUserCurrentLocation();

    let userViaOAuth = localStorage.getItem('GoogleOAuth_USER');
    if (userViaOAuth) {
      this.user = { firstname: JSON.parse(userViaOAuth).firstName, ...JSON.parse(userViaOAuth) };
    }

  }


  updateUserCurrentLocation() {
    // Get user current location
    this.userCurrentLocation = this.utilityService.getDictObject('currentAddress');
    // console.log("userCurrentLocation", this.userCurrentLocation.formatted_address)
    this.searchLocation = this.userCurrentLocation ? this.userCurrentLocation.formatted_address : '';
  }
  // Only test uses
  searchHotel() {

    this.router.navigate(['/hotel-search']);
  }


  loadLocation: boolean = false;
  getCurrentLocation() {
    this.loadLocation = true;
    this.utilityService.getCurrentLocation();
    setTimeout(() => {
      this.updateUserCurrentLocation();
      this.loadLocation = false;
    }, 5000)
  }

  isCloseContainer(is_closed: boolean) {
    if (!is_closed) {
      this.guests_n_rooms_picker_toggle = false;
    }
  }

  getTotalRoomAndGuestCount(event: any) {
    this.totalRoomGuestCount = event;
    this.totalRoomGuestCount = {
      roomQty: event.roomQty,
      guestQty: event.guestQty
    }    
    this.guests_n_rooms_picker_toggle = false;
  }




  geoArea: string = '';
  geoState: string = '';
  geoAddress: string = '';
  geoCity: string = '';
  geoLat: number = 0;
  geoLng: number = 0;
  locationoptions = {
    types: [],
    componentRestrictions: { country: 'UA' }
  }

  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;
  public handleAddressChange(address: Address) {
    // Do some stuff
    let cities: any = [];
    //find country name
    for (var i = 0; i < address.address_components.length; i++) {
      for (var b = 0; b < address.address_components[i].types.length; b++) {
        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
        if (address.address_components[i].types[b] == "administrative_area_level_2" || address.address_components[i].types[b] == "locality") {
          //this is the object you are looking for
          //city data
          cities.push(address.address_components[i]);
          break;
        }
      }
    }
    //   console.log("Cities list:", cities[0].short_name);
    this.geoCity = cities[0].short_name;
    this.geoArea = address.name;
    this.geoLat = address.geometry.location.lat();
    this.geoLng = address.geometry.location.lng();
    this.searchLocation = address.formatted_address;
    console.log("Address = ", this.searchLocation + " " + this.geoLat + " " + this.geoLng);
  }

}
