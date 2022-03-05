import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { PrimeNGModule } from "../primeng.module";
import { GuestsAndRoomsPickerComponent } from "./components/header/guests-and-rooms-picker/guests-and-rooms-picker.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SafeHtmlPipe } from "../_pipes";
import { SetPriceComponent } from "./components/set-price/set-price.component";
import { JusbidModelComponent } from "./components/jusbid-model/jusbid-model.component";
import { ImageGalleryComponent } from "../jusbid-hotels/hotel-details/hotel-detail-layout/details-components/image-gallery/image-gallery.component";
import { BidConfirmationComponent } from "./components/bid-confirmation/bid-confirmation.component";
import { ThreeSixtyViewComponent } from "./components/three-sixty-view/three-sixty-view.component";
import { HotelImageGalleryComponent } from './components/hotel-image-gallery/hotel-image-gallery.component';
import { JusbidSearchFormComponent } from './components/jusbid-search-form/jusbid-search-form.component';
import { HotelSearchFormComponent } from './components/jusbid-search-form/components/hotel-search-form/hotel-search-form.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AgmCoreModule } from "@agm/core";
import { AdultChildCountComponent } from './components/adult-child-count/adult-child-count.component';
import { SearchFormComponent } from "./components/header/hotels-components/search-form/search-form.component";
import { RecommendedHotelCardComponent } from './components/recommended-hotel-card/recommended-hotel-card.component';
import { Slider1Component } from './components/Sliders/slider1/slider1.component';
import { Slider2Component } from './components/Sliders/slider2/slider2.component';
import { Slider3Component } from './components/Sliders/slider3/slider3.component';
import { FaqsComponent } from "./components/faqs/faqs.component";

const exportsData: any = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  SetPriceComponent,
  JusbidModelComponent,
  ThreeSixtyViewComponent,
  HotelImageGalleryComponent,
  ImageGalleryComponent,
  JusbidSearchFormComponent,
  GoogleMapComponent,
  GuestsAndRoomsPickerComponent,
  AdultChildCountComponent,
  SearchFormComponent,
  RecommendedHotelCardComponent,
  Slider1Component,
  Slider2Component,
  Slider3Component,
  FaqsComponent,
];

@NgModule({
  declarations: [
    ...exportsData,
    SafeHtmlPipe,
    BidConfirmationComponent,
    HotelSearchFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDG8Z4FQOFQ9ddX0INeSaY11MLRTyr-0Xw'
    }),
    IonicModule.forRoot(),
  ],
  exports: [
    FormsModule,
    PrimeNGModule,
    SafeHtmlPipe,
    ...exportsData,
    IonicModule.forRoot(),
  ],
})
export class SharedModule {}
