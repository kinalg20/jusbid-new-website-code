import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BidConfirmationComponent } from "./shared/components/bid-confirmation/bid-confirmation.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./jusbid-hotels/customer-profile/customer-profile.module").then(
        (m) => m.CustomerProfileModule
      ),
  },
  {
    path: "hotels",
    children: [
      {
        path: "",
        loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "hotel-search",
        loadChildren: () =>
          import("./jusbid-hotels/hotel-list/hotel-list.module").then(
            (m) => m.HotelListModule
          ),
      },
      {
        path: "recent-bids",
        loadChildren: () =>
          import("./jusbid-hotels/recent-bids/recent-bids.module").then(
            (m) => m.RecentBidsModule
          ),
      },
      {
        path: "recent-bookings",
        loadChildren: () =>
          import("./jusbid-hotels/recent-bookings/recent-bookings.module").then(
            (m) => m.RecentBookingsModule
          ),
      },
      {
        path: "checkout",
        loadChildren: () =>
          import("./jusbid-hotels/checkout/checkout.module").then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: "bid-confirmation",
        component: BidConfirmationComponent,
      },
      {
        path: "checkout",
        loadChildren: () =>
          import("./jusbid-hotels/checkout/checkout.module").then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: ":id",
        loadChildren: () =>
          import("./jusbid-hotels/hotel-details/hotel-details.module").then(
            (m) => m.HotelDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
