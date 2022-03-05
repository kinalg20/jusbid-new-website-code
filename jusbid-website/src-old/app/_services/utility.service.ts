import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Loader, LoaderOptions } from 'google-maps';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginedUser } from '../_models';
import { ApiService } from './api.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private GoogleMapAPIKey = environment.GoogleMapAPIKey;
  guestRoomCounts = new BehaviorSubject<any>({});
  constructor(public toastController: ToastController) { }

  async getGeoLocation(lat: number, lng: number) {

    const options: LoaderOptions = {/* todo */ };
    const loader = new Loader(this.GoogleMapAPIKey, options);

    const google = await loader.load();

    if (navigator.geolocation) {
      let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(lat, lng);
      let request: any = { latLng: latlng };
      geocoder.geocode(request, (results: any, status: any) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          if (result != null) {
            console.log("Adddres:", result);
            console.log("Adddres:", result.formatted_address);
            this.setObject(result, 'currentAddress')
            // this.customerLocation = result.formatted_address;
          } else {
            alert("No address available!");
          }
        }
      });
    }
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let customerLatitude = position.coords.latitude;
        let customerLongitude = position.coords.longitude;
        console.log("lat long", customerLatitude, customerLongitude)
        this.getGeoLocation(customerLatitude, customerLongitude);
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  queryStringToJSON(query: string): Object {
    const pairs = query.split('&');
    const result: any = {};
    pairs.forEach((p: string) => {
      let pair = p.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
  }

  setObject(obj: any, key: string): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getObject(key: string): any {
    return localStorage.getItem(key);
  }

  getDictObject(key: string): any {
    try {
      return JSON.parse(this.getObject(key));
    } catch {
      return null;
    }
  }

  clearObject(key: string): void {
    localStorage.setItem(key, '');
  }

  removeObject(key: string): void {
    localStorage.removeItem(key);
  }

  async Toast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  goBack() {
    window.history.back();
  }

}
