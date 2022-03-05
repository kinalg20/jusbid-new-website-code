import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailsRoutingModule } from './hotel-details-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelDetailLayoutComponent } from './hotel-detail-layout/hotel-detail-layout.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { FormsModule } from '@angular/forms';
import { HotelAminityComponent } from './hotel-detail-layout/details-components/hotel-aminity/hotel-aminity.component';
import { HotelDescriptionComponent } from './hotel-detail-layout/details-components/hotel-description/hotel-description.component';
import { HotelDetailImageComponent } from './hotel-detail-layout/details-components/hotel-detail-image/hotel-detail-image.component';
import { HotelRoomSectionComponent } from './hotel-detail-layout/details-components/hotel-room-section/hotel-room-section.component';
import { SectionTitleComponent } from './hotel-detail-layout/section-title/section-title.component';
@NgModule({
  declarations: [
    HotelDetailLayoutComponent,
    BidFormComponent,
    HotelAminityComponent,
    HotelDescriptionComponent,
    HotelDetailImageComponent,
    HotelRoomSectionComponent,
    SectionTitleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelDetailsRoutingModule,
    FormsModule
  ]
})
export class HotelDetailsModule { }
