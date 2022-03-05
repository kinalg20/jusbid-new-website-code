import * as fromHotel from './hotel-reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';


export interface RootReducerState {
    hotels: fromHotel.HotelReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    hotels: fromHotel.HotelReducer,
};

export const getHotelState = (state: RootReducerState) => state.hotels;

export const getHotelLoaded = createSelector(getHotelState, fromHotel.getLoaded);
export const getHotelLoading = createSelector(getHotelState, fromHotel.getLoading);
export const getHotelEntities = createSelector(getHotelState, fromHotel.getEntities);
export const getHotels = createSelector(getHotelState, fromHotel.getHotels);
export const getHotelError = createSelector(getHotelState, fromHotel.getError);

// export const getHotelById = (state: RootReducerState, id: number) => {
//     const entities = getHotelEntities(state);
//     return entities[id];
// };