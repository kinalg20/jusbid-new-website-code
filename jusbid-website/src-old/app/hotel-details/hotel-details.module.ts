import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailsRoutingModule } from './hotel-details-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelDetailLayoutComponent } from './hotel-detail-layout/hotel-detail-layout.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HotelDetailLayoutComponent,
    BidFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelDetailsRoutingModule,
    FormsModule
  ]
})
export class HotelDetailsModule { }
