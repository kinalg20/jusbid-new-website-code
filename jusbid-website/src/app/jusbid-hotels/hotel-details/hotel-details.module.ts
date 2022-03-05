import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailsRoutingModule } from './hotel-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HotelDetailLayoutComponent } from './hotel-detail-layout/hotel-detail-layout.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { FormsModule } from '@angular/forms';
import { HotelAminityComponent } from './hotel-detail-layout/details-components/hotel-aminity/hotel-aminity.component';
import { HotelDescriptionComponent } from './hotel-detail-layout/details-components/hotel-description/hotel-description.component';
import { HotelDetailImageComponent } from './hotel-detail-layout/details-components/hotel-detail-image/hotel-detail-image.component';
import { HotelRoomSectionComponent } from './hotel-detail-layout/details-components/hotel-room-section/hotel-room-section.component';
import { SectionTitleComponent } from './hotel-detail-layout/section-title/section-title.component';
import { HotelPoliciesComponent } from './hotel-detail-layout/details-components/hotel-policies/hotel-policies.component';
import { RoomAmenityModelComponent } from './hotel-detail-layout/details-components/room-amenity-model/room-amenity-model.component';
import { RoomDetailsComponent } from './hotel-detail-layout/details-components/room-details/room-details.component';
import { HotelsReviewsComponent } from './hotel-detail-layout/details-components/hotels-reviews/hotels-reviews.component';
import { CustomerRatingReviewModelComponent } from './hotel-detail-layout/details-components/customer-rating-review-model/customer-rating-review-model.component';
import { CustomerReviewCardComponent } from './hotel-detail-layout/details-components/customer-rating-review-model/customer-review-card/customer-review-card.component';
import { RecommendationHotelsComponent } from './hotel-detail-layout/details-components/recommendation-hotels/recommendation-hotels.component';
@NgModule({
  declarations: [
    HotelDetailLayoutComponent,
    BidFormComponent,
    HotelAminityComponent,
    HotelDescriptionComponent,
    HotelDetailImageComponent,
    HotelRoomSectionComponent,
    SectionTitleComponent,
    HotelPoliciesComponent,
    RoomAmenityModelComponent,
    RoomDetailsComponent,
    HotelsReviewsComponent,
    CustomerRatingReviewModelComponent,
    CustomerReviewCardComponent,
    RecommendationHotelsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelDetailsRoutingModule,
    FormsModule,
  ]
})
export class HotelDetailsModule { }
