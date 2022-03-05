import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

const exportsData: any = [
    CalendarModule,
    SliderModule
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