import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  isNotShowThumnails: boolean = false;
  isShowRoomDetail: boolean = false;
  @Output() closeRoomDetailModel = new EventEmitter<boolean>();
  @Input() RoomDetails: any;
  @Input() FetchedAmenity: any;
  isReadMorebutton: boolean = false;
  isReadMoreDesc: boolean = false;
  hotel_desc = ['Hotel Rules and Regulation for Guest Hotel rules are management policy or agreements between the guest and the hotel. Usually these policies are mentioned on the guest registration card which is signed by the guest at the time of check in. In Addition to this a copy of rules and regulation is also kept on all guest rooms for guest to read and understand the management'
  ]
  constructor() { }

  ngOnInit(): void { }

  CloseRoomDetailModel(close: boolean) {
    this.closeRoomDetailModel.emit(close)
  }

  getRoomImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }

  desc_len: number = 50
  readMoreDesc(room_desc: any) {
    let len = room_desc.length;
    this.isReadMoreDesc = !this.isReadMoreDesc;
    this.desc_len = this.isReadMoreDesc ? len : 50;
  }
  amenity_len: number = 6;
  readMoreAmenity(amenities: any) {
    let len = amenities.length;
    this.isReadMorebutton = !this.isReadMorebutton;
    this.amenity_len = this.isReadMorebutton ? len : 6;
  }
}
