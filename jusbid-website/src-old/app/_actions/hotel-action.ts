import { Hotel } from "../_models/hotel";

export const HOTEL_LIST_REQUEST = 'hotel list request';
export const HOTEL_LIST_ERROR = 'hotel list error';
export const HOTEL_LIST_SUCCESS = 'hotel list success';

export class HotelListRequestAction {
    readonly type = HOTEL_LIST_REQUEST;
}

export class HotelListErrorAction {
    readonly type = HOTEL_LIST_ERROR;
}

export class HotelListSuccessAction {
    readonly type = HOTEL_LIST_SUCCESS;

    constructor(public payload?: { data: Hotel[] }) {
    }
}
