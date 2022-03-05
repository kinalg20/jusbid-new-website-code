import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelListRoutingModule } from './hotel-list-routing.module';

import { ListCardComponent } from './components/list-card/list-card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SharedModule } from '../../shared/shared.module';
import { ListingLayoutComponent } from './listing-layout.component';
import { ListingComponent } from './components/listing/listing.component';


@NgModule({
  declarations: [
    ListingLayoutComponent,
    ListingComponent,
    ListCardComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelListRoutingModule
  ]
})
export class HotelListModule { }
