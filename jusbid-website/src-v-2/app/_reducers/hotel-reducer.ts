import { createSelector } from '@ngrx/store';
import { Action } from '../_actions';
import { HOTEL_LIST_ERROR, HOTEL_LIST_REQUEST, HOTEL_LIST_SUCCESS } from '../_actions/hotel-action';
import { Hotel } from '../_models';
import { HotelUtility } from '../_utils/hotel-utility';

export interface HotelReducerState {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    entities: []
    // ids: number[];
}

const initialState: HotelReducerState = {
    loaded: false,
    loading: false,
    error: false,
    entities: [],
    // ids: []
};

export function HotelReducer(state = initialState, action: Action): HotelReducerState {
    console.log(action)
    switch (action.type) {
        case HOTEL_LIST_REQUEST: {
            return { ...state, loading: true };
        }
        case HOTEL_LIST_ERROR: {
            return { ...state, error: true, loading: false };
        }
        case HOTEL_LIST_SUCCESS: {
            const hotels = action.payload.data;
            const obj = HotelUtility.normalize(hotels);
            const newEntities = { ...state.entities, ...obj };
            // const ids = hotels.map((hotel: Hotel) => hotel.id); // ObjectID
            // const newIds = HotelUtility.filterDuplicateIds([...state.ids, ...ids]);
            return {
                ...state, ...{
                    loaded: true,
                    loading: false,
                    error: false,
                    entities: newEntities,
                    // ids: newIds
                }
            };
        }
        default: {
            return state;
        }
    }
}

// selectors
export const getLoading = (state: HotelReducerState) => state.loading;
export const getLoaded = (state: HotelReducerState) => state.loaded;
export const getEntities = (state: HotelReducerState) => state.entities;
// export const getIds = (state: HotelReducerState) => state.ids;
export const getHotels = createSelector(getEntities,
    (entities) => HotelUtility.unNormalized(entities));
export const getError = (state: HotelReducerState) => state.error;

