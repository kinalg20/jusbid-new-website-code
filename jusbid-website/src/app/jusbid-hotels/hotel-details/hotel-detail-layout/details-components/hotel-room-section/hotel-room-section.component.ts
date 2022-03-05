import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AminitydataService } from 'src/app/_services/aminitydata.service';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'app-hotel-room-section',
  templateUrl: './hotel-room-section.component.html',
  styleUrls: ['./hotel-room-section.component.scss'],
  // encapsulation:ViewEncapsulation.Emulated 
})
export class HotelRoomSectionComponent implements OnInit {

  constructor(private _aminityService: AminitydataService, private _utility: UtilityService , private dataService: DataService) { }
  Showroomaminities: boolean = false;
  selectbutton: string = "Select";
  selectdisable: boolean = false;
  stopscrolling: boolean = false;
  scrollPosition = 0;
  isShowImageModel: boolean = false;
  isShowRoomDetails: boolean = false;
  hideRoomDetails: boolean = false;
  isShowClose: boolean = false;
  isShowThumnails: boolean = false;
  allRoomAmenityData: any = {};
  fetchedRoomAmenity:any=[];
  @Input() roomDetails: any = [];
  @Output() getRoomDetails = new EventEmitter<any>();
  ngOnInit(): void {
    this._utility.roomAminities.subscribe({
      next: (grca) => {
        if (grca) {
          this.allRoomAmenityData=grca[0].data;
        }
      }
    });    
    this.getroomaminitydata();
    this.updateSelectedRoom();
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


  selectedRoom: any = {};
  getSelectedRoomDetails(room: any) {
    this.updateSelectedRoom();
    this.getRoomDetails.emit(room);
  }

  updateSelectedRoom() {
    this.dataService.selectedHotelRoom.subscribe({
      next: (roomData) => {
        this.selectedRoom = roomData;
      }
    });
  }



  closeImageModel(close: boolean) {
    this.isShowImageModel = close;
  }
  closeRoomDetails(close: boolean) {
    this.isShowRoomDetails = close;
  }
  closeRoomDetailModel(close: boolean) {
    this.isShowRoomDetails = close;
  }
  getRoomImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }
  getroomaminitydata() {
    this.roomDetails.room_amenities.map((res: any) => {
      this.fetchedRoomAmenity.push(this._utility.getDataByAttr(this.allRoomAmenityData,'id', res));
    });
  }
  stopwindoescroller(){
    window.scroll(0, 0);
  }

}
