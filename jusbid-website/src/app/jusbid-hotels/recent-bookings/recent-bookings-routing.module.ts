import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { RecentBookingsComponent } from './recent-bids.component';

const routes: Routes = [
  {
    path: '',
    component: RecentBookingsComponent,
    children: [
      {
        path: '',
        component: BookingsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentBookingsRoutingModule { }
