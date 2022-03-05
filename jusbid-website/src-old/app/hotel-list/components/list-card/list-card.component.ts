import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() hotelData:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(path: string): string {
    return `https://jusbid.in:1337/${path}`;
  }

}
