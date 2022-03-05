import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isHome: boolean = true;
  @Input() addShadow: boolean = true;

  searchLocation: any;
  isShowSideBar: boolean = false;

  dateValue = '';
  dateValue2 = '';
  today: Date = new Date();
  tomorrow: Date = new Date();
  guests_n_rooms_picker_toggle: boolean = false;
  room_count: any = 1;
  guest_count: any;
  rangeDates: any;
  totalRoomGuestCount: any = {
    roomQty: 1,
    guestQty: 1
  }
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

  }


  updateUserCurrentLocation() {
    // Get user current location
    this.userCurrentLocation = this.utilityService.getDictObject('currentAddress');
    // console.log("userCurrentLocation", this.userCurrentLocation.formatted_address)
    this.searchLocation = this.userCurrentLocation ? this.userCurrentLocation.formatted_address : '';
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
  gotoAuth() {
    this.router.navigate(['/auth']);
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
    this.guests_n_rooms_picker_toggle = false;
  }

  closeSiderbar(close:boolean){
    this.isShowSideBar = close;
  }

}
