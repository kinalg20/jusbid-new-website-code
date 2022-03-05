import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerProfileRoutingModule } from './customer-profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CustomerProfileLayoutComponent } from './customer-profile-layout.component';
import { CustomerProfileDetailsComponent } from './customer-profile-details/customer-profile-details.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    PersonalInfoComponent,
    CustomerProfileLayoutComponent,
    CustomerProfileDetailsComponent,
    EditPhotoComponent
  ],
  imports: [
    CommonModule,
    CustomerProfileRoutingModule,
    SharedModule
  ]
})
export class CustomerProfileModule { }
