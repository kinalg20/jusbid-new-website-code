import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidsListComponent } from './bids-list/bids-list.component';
import { RecentBidsComponent } from './recent-bids.component';

const routes: Routes = [
  {
    path: '',
    component: RecentBidsComponent,
    children: [
      {
        path: '',
        component: BidsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentBidsRoutingModule { }
