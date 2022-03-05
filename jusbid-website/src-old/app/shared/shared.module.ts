import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from '../primeng.module';
import { GuestsAndRoomsPickerComponent } from './components/header/guests-and-rooms-picker/guests-and-rooms-picker.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const exportsData: any = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
]

@NgModule({
  declarations: [
    ...exportsData,
    GuestsAndRoomsPickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule,
    IonicModule.forRoot(),
  ],
  exports: [
    FormsModule,
    PrimeNGModule,
    ...exportsData,
    IonicModule.forRoot(),
  ],
})
export class SharedModule { }
