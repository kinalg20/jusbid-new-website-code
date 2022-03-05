import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-aminity',
  templateUrl: './hotel-aminity.component.html',
  styleUrls: ['./hotel-aminity.component.scss']
})
export class HotelAminityComponent implements OnInit {
  isShowRoomModel: boolean = false;
  @Input() amenities:any=[];
  Showroomaminity: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ShowroomAminity() {
    this.Showroomaminity = false;
  }
  closeRoomModel(close: boolean) {
    this.isShowRoomModel = close;
  }

  getImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }

}
