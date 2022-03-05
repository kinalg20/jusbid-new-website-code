import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/_services/api.service';
import { GetHotelDetailAction } from '../actions/hoteldetail.action';

export class HotelDetailStateModel {
    hoteldetaildata: any;
    loaded!: boolean;
}

@State<HotelDetailStateModel>({
    name: 'hoteldetails',
    defaults: {
        hoteldetaildata: [],
        loaded: false
    }
})
@Injectable()
export class HotelDetailState {

    constructor(private apiService: ApiService) { }

    @Selector()
    static getHotelDetail(state: HotelDetailStateModel) {
        return state.hoteldetaildata
    }
    @Selector()
    static isHotelsLoaded(state: HotelDetailStateModel) {
        return state.loaded
    }

    @Action(GetHotelDetailAction)
    getHotelData({ getState, setState }: StateContext<HotelDetailStateModel>) {
        return this.apiService.getAllHotelDetails().pipe(tap(res => {
            const state = getState();
            setState({
                ...state,
                hoteldetaildata: res,
                loaded: true
            });
        }))
    }

}