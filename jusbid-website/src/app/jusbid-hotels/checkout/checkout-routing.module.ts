import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkoutLayoutComponent } from './check-layout.component';
import { CheckoutLayoutPageComponent } from './components/checkout-layout-page/checkout-layout-page.component';

const routes: Routes = [
  {
    path:'',
    component: checkoutLayoutComponent,
    children: [
      {
        path: '',
        component: CheckoutLayoutPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
