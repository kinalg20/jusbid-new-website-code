import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'room-amenity-model',
  templateUrl: './room-amenity-model.component.html',
  styleUrls: ['./room-amenity-model.component.scss']
})
export class RoomAmenityModelComponent implements OnInit {

  @Output() closeRoomModel = new EventEmitter<boolean>();
  @Input() aminityModel:any={};

  stopscrolling: boolean = false;
  scrollPosition = 0;
  Showroomaminities: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  ShowroomAminity() {
    this.Showroomaminities = !this.Showroomaminities;

    if (this.Showroomaminities) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      window.scrollTo(0, this.scrollPosition);
    }
    else {
      document.body.style.overflow = ""
    }
  }


  CloseRoomAminityModel(close: boolean) {
    this.closeRoomModel.emit(close)
  }

  getImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }
}

