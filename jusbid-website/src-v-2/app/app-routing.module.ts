import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'hotel-search',
    loadChildren: () => import('./hotel-list/hotel-list.module').then(m => m.HotelListModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./customer-profile/customer-profile.module').then(m => m.CustomerProfileModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./hotel-details/hotel-details.module').then(m => m.HotelDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
