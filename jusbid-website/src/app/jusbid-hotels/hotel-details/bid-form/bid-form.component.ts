import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.scss']
})

export class BidFormComponent implements OnInit {

  selectedRoom: any = {};
  selectedRoomValue : any;

  dateValue = '';
  dateValue2 = '';
  today: Date = new Date();
  tomorrow: Date = new Date();
  rangeDates: any;
  noOfDays: number = 1;

  bidAmt: number = 4000;
  roomsCount: number = 1;
  adultCount: number = 2;

  minBidAmt = 3000;
  target: any;

  countDropDown: boolean = false;
  totalAdultChildCount = {
    adultCount: 1,
    childCount: 0
  };


  @Input() hotel_rooms :any ={}

  constructor(private utilityService: UtilityService, private dataService:DataService) {

    this.dataService.selectedHotelRoom.subscribe({
      next: (res) => {
       this.selectedRoom = res;
       this.selectedRoomValue=this.selectedRoom.room_type;
      }
    });
  }

  ngOnInit(): void {
    // Active date
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.rangeDates = [this.today, this.tomorrow];

    this.utilityService.adultChildCounts.subscribe({
      next: (grca) => {
        if (grca && grca.adultCount && grca.childCount) {
          this.totalAdultChildCount['adultCount'] = grca.adultCount;
          this.totalAdultChildCount['childCount'] = grca.childCount;
        }
      }
    });
  }

  // Place Bid
  getBidResponse(): void {
    this.noOfDays = this.calculateDays(this.rangeDates[0], this.rangeDates[1]);
    let bidRes: any = {
      bidAmt: this.bidAmt,
      roomsCount: this.roomsCount,
      adultsCount: this.adultCount,
      date: this.rangeDates,
      category: this.selectedRoom.room_type,
      noOfDays: this.noOfDays
    };
    console.log("Bid Response:", bidRes);
    console.log(this.selectedRoom.room_type);
  }

  // Validate bid amount entered by user
  isValidBidAmt(bidAmt: number): boolean {

    if (bidAmt <= this.minBidAmt) return true;

    return false;

  }

  // Calculate number of days between selected two dates
  calculateDays(startDate: any, endDate: any): number {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(startDate - endDate);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

  }

  isCloseContainer(is_closed: boolean) {
    if (!is_closed) {
      this.countDropDown = false;
    }
  }

  getTotalAdultChildCount(event: any) {
    this.totalAdultChildCount = {
      adultCount: event.adultCount,
      childCount: event.childCount
    };
    this.countDropDown = false;
  }

  closeContainer(event: any) {
    if (!event) {
      this.countDropDown = event;
    }
  }

}
