import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './_services/api.service';
import { HttpService } from './_services/http.service';
import { UtilityService } from './_services/utility.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './_services/data.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HotelState } from './store/state/hotel.state';
import { WebSocketIOService } from './_services/web.socket.io.service';
import { HotelDetailState } from './store/state/hoteldetail.state';
import { HotelAmenityState } from './store/state/hotelamenity.state';
import { AminitydataService } from './_services/aminitydata.service';
import { RoomAmenityState } from './store/state/roomamenity.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot([HotelState, HotelDetailState, HotelAmenityState, RoomAmenityState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [HttpService, ApiService, UtilityService, DataService, WebSocketIOService, AminitydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
