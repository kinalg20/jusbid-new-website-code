import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {PaginatorModule} from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';

const exportsData: any = [
    CalendarModule,
    SliderModule,
    DropdownModule,
    GalleriaModule,
    CarouselModule,
    PaginatorModule,
    InputTextModule
]

@NgModule({
    declarations: [],
    imports: [
        ...exportsData
    ],
    exports: [
        ...exportsData,
    ],
})
export class PrimeNGModule { }