import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "checkout-information",
  templateUrl: "./checkout-information.component.html",
  styleUrls: ["./checkout-information.component.scss"],
})
export class CheckoutInformationComponent implements OnInit {
  rangeDates: any;
  today: Date = new Date();
  tomorrow: Date = new Date();
  guests_n_rooms_picker_toggle: boolean = false;
  showcalender: boolean = false;
  totalRoomGuestCount: any = {
    roomQty: 1,
    guestQty: 1,
  };
  constructor() {}

  ngOnInit(): void {
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.rangeDates = [this.today, this.tomorrow];
    console.log("da", this.rangeDates)
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
}

