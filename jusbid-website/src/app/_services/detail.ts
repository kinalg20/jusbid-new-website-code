import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(
        private httpService: HttpService
    ) { }
    getAllHotelDetails() {
        return this.httpService.get('http://192.168.1.13:3000/api/get-hotel-detail');
    }
}