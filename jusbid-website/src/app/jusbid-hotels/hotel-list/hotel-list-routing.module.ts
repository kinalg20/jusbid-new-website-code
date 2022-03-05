import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { ListingLayoutComponent } from './listing-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ListingLayoutComponent,
    children: [
      {
        path: '',
        component: ListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelListRoutingModule { }
