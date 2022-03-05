import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
const exportsData: any = [
    CalendarModule,
    SliderModule,
    DropdownModule
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