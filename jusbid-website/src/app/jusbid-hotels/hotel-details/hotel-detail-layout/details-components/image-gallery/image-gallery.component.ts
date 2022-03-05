import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() isShowThumnails: boolean = false;
  @Input() isNotShowThumnails: boolean = false;
  @Input() imageGalleryUrl: any;
  @Input() imagecrousel: any;
  image: any = []

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
    this.imagecrousel.map((res: any) => {
      res.prevurl='https://jusbid.in:1337/' + res.path;
      res.thum = 'https://jusbid.in:1337/' + res.min_path;
      this.image.push({prevurl : res.prevurl , thumnail : res.thum});
    })
    console.log(this.image);
  }

  getRoomImageUrl(url: string): string {
    return `https://jusbid.in:1337/${url}`;

  }

}
