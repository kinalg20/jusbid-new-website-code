import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailLayoutComponent } from './hotel-detail-layout/hotel-detail-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HotelDetailLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelDetailsRoutingModule { }
