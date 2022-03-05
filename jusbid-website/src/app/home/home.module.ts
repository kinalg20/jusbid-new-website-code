import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHotelsComponent } from './home-hotels/home-hotels.component';
import { SharedModule } from '../shared/shared.module';
import { HomeFlightsComponent } from './home-flights/home-flights.component';
import { HomeRealEstateComponent } from './home-real-estate/home-real-estate.component';
import { HomeComponent } from './home.component';
import { HomeTopHeaderComponent } from './components/home-top-header/home-top-header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHotelsComponent,
    HomeFlightsComponent,
    HomeRealEstateComponent,
    HomeTopHeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
