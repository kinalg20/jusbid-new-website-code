import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFlightsComponent } from './home-flights/home-flights.component';
import { HomeHotelsComponent } from './home-hotels/home-hotels.component';
import { HomeRealEstateComponent } from './home-real-estate/home-real-estate.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeHotelsComponent
      },
      {
        path: 'flights',
        component: HomeFlightsComponent
      },
      {
        path: 'realestate',
        component: HomeRealEstateComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
