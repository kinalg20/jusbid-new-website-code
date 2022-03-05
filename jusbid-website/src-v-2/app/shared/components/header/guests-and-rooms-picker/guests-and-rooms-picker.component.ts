import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'guests-and-rooms-picker',
  templateUrl: './guests-and-rooms-picker.component.html',
  styleUrls: ['./guests-and-rooms-picker.component.scss']
})
export class GuestsAndRoomsPickerComponent implements OnInit {

  @Output() closeContainer = new EventEmitter<boolean>();
  @Output() roomGuestCount = new EventEmitter<any>();

  roomCountArray: any = [{
    roomQty: 1,
    guestQty: 1
  }];
  totalRoomGuestCount: any = {
    roomQty: 1,
    guestQty: 1
  }
  constructor(private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.utilityService.guestRoomCounts.subscribe({
      next: (grca) => {
        if (grca.roomCountArray && grca.roomCountArray.length != 0) {
          this.roomCountArray = grca.roomCountArray;
        }
      }
    });
  }

  addNewRoom() {
    this.roomCountArray.push({
      roomQty: 1,
      guestQty: 1
    });
  }

  removeRoom() {
    this.roomCountArray.pop({
      roomQty: 1,
      guestQty: 1
    });
  }

  increaseGuestCount(roomIndex: number) {
    this.roomCountArray[roomIndex]['guestQty'] = this.roomCountArray[roomIndex]['guestQty'] + 1;

  }

  decreaseGuestCount(roomIndex: number) {
    if (this.roomCountArray[roomIndex]['guestQty'] > 1) {
      this.roomCountArray[roomIndex]['guestQty'] = this.roomCountArray[roomIndex]['guestQty'] - 1;
    }
  }

  closeRoomGuestCounterContainer(close: boolean) {
    this.closeContainer.emit(close);
  }

  apply_button() {
    this.totalRoomGuestCount = {
      roomQty: this.roomCountArray.length,
      guestQty: this.roomCountArray.reduce((prev: any, next: any) => prev + next.guestQty, 0)
    }
    this.roomGuestCount.emit(this.totalRoomGuestCount)
    this.utilityService.guestRoomCounts.next({ roomCountArray: this.roomCountArray ? this.roomCountArray : [], ...this.totalRoomGuestCount });
  }
}
