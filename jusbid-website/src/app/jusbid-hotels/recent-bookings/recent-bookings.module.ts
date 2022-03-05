import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentBookingsRoutingModule } from './recent-bookings-routing.module';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { RecentBookingsComponent } from './recent-bids.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingsListComponent,
    RecentBookingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecentBookingsRoutingModule
  ]
})
export class RecentBookingsModule { }
