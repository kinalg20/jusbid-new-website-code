import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/_services/api.service';
import { GetHotelAmenityAction } from '../actions/hotelamenity.action';

export class HotelAmenityStateModel {
    hotelamenitydata: any;
    hotelamenityloaded!: boolean
}

@State<HotelAmenityStateModel>({
    name: 'hotelamenity',
    defaults: {
        hotelamenitydata: [],
        hotelamenityloaded: false
    }
})
@Injectable()
export class HotelAmenityState {

    constructor(private apiService: ApiService) { }

    @Selector()
    static getHotelAminity(state: HotelAmenityStateModel) {
        return state.hotelamenitydata;
    }
    @Selector()
    static isHotelsAminityLoaded(state: HotelAmenityStateModel) {
        return state.hotelamenityloaded;
    }

    @Action(GetHotelAmenityAction)
    getHotels({ getState, setState }: StateContext<HotelAmenityStateModel>) {
        return this.apiService.getAllAmenities().pipe(tap(res => {
            const state = getState();
            setState({
                ...state,
                hotelamenitydata: res,
                hotelamenityloaded: true
            });
        }))
    }

}