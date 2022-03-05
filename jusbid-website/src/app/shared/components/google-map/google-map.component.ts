import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {

  @Input() latlong: any = [];
  @Input() hotelName: string = "";
  map: any;
  isShowModal: boolean = true;

  isMapLoad: boolean = false;

  selectedData: any;

  constructor(private utilityService: UtilityService) {
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([20, 20], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);

    const icon = L.icon({
      // iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149059.png',
      // shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
      popupAnchor: [0, -12],
      iconSize: [30, 30],
    });

    // this.map.on('click', (event: any) => {
    //   let dd = this.utilityService.getGeoLocation(event.latlng.lat, event.latlng.lng);
    //   let marker = L.marker([event.latlng.lat, event.latlng.lng], { icon , draggable: true});
    //   dd.then(
    //     res => {
    //       res.subscribe(
    //         responseData => {
    //           this.selectedData = responseData;
    //           // marker.bindPopup(responseData.formatted_address);
    //           // marker.addTo(this.map);
    //           this.map.addLayer(marker);
    //           marker.bindPopup(`${responseData.formatted_address}`).openPopup();
    //         }
    //       );
    //     }
    //   ).catch(err => console.log(err));
    // });

    this.getCurrentPosition()
      .subscribe((position: any) => {
        if (!this.isMapLoad) {
          this.map.flyTo([this.latlong[0], this.latlong[1]], 16);

          const marker = L.marker([this.latlong[0], this.latlong[1]], { icon }).bindPopup(this.hotelName);
          marker.addTo(this.map);
          this.isMapLoad = true;
        }
      });
  }


}
