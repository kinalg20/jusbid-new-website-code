import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentBidsRoutingModule } from './recent-bids-routing.module';
import { RecentBidsComponent } from './recent-bids.component';
import { BidsListComponent } from './bids-list/bids-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RecentBidsComponent,
    BidsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecentBidsRoutingModule
  ]
})
export class RecentBidsModule { }
