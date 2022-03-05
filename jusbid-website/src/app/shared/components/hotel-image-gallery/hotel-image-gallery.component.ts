import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-image-gallery',
  templateUrl: './hotel-image-gallery.component.html',
  styleUrls: ['./hotel-image-gallery.component.scss']
})
export class HotelImageGalleryComponent implements OnInit {
  @Input() imageurl:string='';
  constructor() { }

  ngOnInit(): void {
    console.log(this.imageurl.length);
   }


  getImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;
  }
}
