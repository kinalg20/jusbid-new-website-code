import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileDetailsComponent } from './customer-profile-details/customer-profile-details.component';
import { CustomerProfileLayoutComponent } from './customer-profile-layout.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';


const routes: Routes = [
  {
    path: '', component: CustomerProfileLayoutComponent,
    children: [
      {
        path: '', component: ProfilePageComponent,
      },
      {
        path: 'personal-info', component: PersonalInfoComponent,
      },
      {
        path: 'customer-profile-details', component: CustomerProfileDetailsComponent,
      },
      {
        path: 'edit-photo', component: EditPhotoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerProfileRoutingModule { }
