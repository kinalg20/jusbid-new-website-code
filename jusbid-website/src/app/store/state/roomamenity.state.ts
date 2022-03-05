import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/_services/api.service';
import { GetRoomAmenityAction} from '../actions/hotelamenity.action';

export class RoomAmenityStateModel {
    Roomamenitydata: any;
    Roomamenityloaded!: boolean
}

@State<RoomAmenityStateModel>({
    name: 'roomamenity',
    defaults: {
        Roomamenitydata: [],
        Roomamenityloaded: false
    }
})
@Injectable()
export class RoomAmenityState {

    constructor(private apiService: ApiService) { }

    @Selector()
    static getRoomAminity(state: RoomAmenityStateModel) {
        return state.Roomamenitydata
    }
    @Selector()
    static isRoomsAminityLoaded(state: RoomAmenityStateModel) {
        return state.Roomamenityloaded
    }

    @Action(GetRoomAmenityAction)
    getHotels({ getState, setState }: StateContext<RoomAmenityStateModel>) {
        return this.apiService.getRoomAmenity().pipe(tap(res => {
            const state = getState();
            setState({
                ...state,
                Roomamenitydata: res,
                Roomamenityloaded: true
            });
        }))
    }

}