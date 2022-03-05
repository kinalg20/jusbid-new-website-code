import { Component, OnInit } from '@angular/core';
import { LoginedUser } from './_models';
import { AminitydataService } from './_services/aminitydata.service';
import { ApiService } from './_services/api.service';
import { DataService } from './_services/data.service';
import { UtilityService } from './_services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jusbid';

  constructor(private _apiService: ApiService, private utilityService: UtilityService, private dataService: DataService, private aminityService: AminitydataService) {
  }

  ngOnInit(): void {
    let userData: LoginedUser = this.utilityService.getDictObject('user');
    if (userData) {
      let userId = userData.userId;
      this._apiService.getUserInformationsByUid(userId).subscribe(
        res => {
          this.dataService.loginedUserSubject.next(res.data);
        }
      )
    }
    this.aminityService.getAllHotelAmenities();
    this.aminityService.hotelAmenityData$.subscribe(res => {
      if (res.data) {
        this.utilityService.hotelAminities.next(res.data);
      }
    })
    this.aminityService.getAllRoomAmenities();
    this.aminityService.roomAmenityData$.subscribe(res => {
      if(res.data){
        this.utilityService.roomAminities.next(res.data);
      }
    })
  }
}


