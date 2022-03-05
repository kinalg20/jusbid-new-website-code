import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutInformationComponent } from "./components/checkout-information/checkout-information.component";
import { CheckoutBillingInfoComponent } from "./components/checkout-billing-info/checkout-billing-info.component";
import { CheckoutLayoutPageComponent } from './components/checkout-layout-page/checkout-layout-page.component';
import { checkoutLayoutComponent } from "./check-layout.component";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  declarations: [checkoutLayoutComponent, CheckoutInformationComponent, CheckoutBillingInfoComponent, CheckoutLayoutPageComponent],
  imports: [CommonModule, CheckoutRoutingModule, SharedModule],
})
export class CheckoutModule {}
