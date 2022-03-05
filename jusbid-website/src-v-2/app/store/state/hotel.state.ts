import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { HotelSearch } from 'src/app/_models/hotelSearch';
import { ApiService } from 'src/app/_services/api.service';
import { GetHotelAction } from '../actions/hotel.action';

export class HotelStateModel {
    data: any;
    loaded!: boolean
}

@State<HotelStateModel>({
    name: 'hotels',
    defaults: {
        data: [],
        loaded: false
    }
})
@Injectable()
export class HotelState {

    constructor(private apiService: ApiService) { }

    @Selector()
    static getHotelList(state: HotelStateModel) {
        return state.data
    }
    @Selector()
    static isHotelsLoaded(state: HotelStateModel) {
        return state.loaded
    }

    @Action(GetHotelAction)
    getHotels({ getState, setState }: StateContext<HotelStateModel>) {
        console.log("State action")

        return this.apiService.getAllHotels().pipe(tap(res => {
            const state = getState();
            setState({
                ...state,
                data: res,
                loaded: true
            });
            console.log("Hotel list:", state);
        }))
    }

}