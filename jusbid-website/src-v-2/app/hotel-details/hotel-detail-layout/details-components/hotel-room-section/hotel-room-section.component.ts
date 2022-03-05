import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-room-section',
  templateUrl: './hotel-room-section.component.html',
  styleUrls: ['./hotel-room-section.component.scss']
})
export class HotelRoomSectionComponent implements OnInit {

  constructor() { }
  Showroomaminities:boolean=false;
  ngOnInit(): void {
  }

  ShowroomAminity(){
    console.log("clicked");
    this.Showroomaminities=!this.Showroomaminities;
  }
}
