import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'set-price',
  templateUrl: './set-price.component.html',
  styleUrls: ['./set-price.component.scss']
})
export class SetPriceComponent implements OnInit {

  @Input() price: any;
  @Input() symbol: string = 'INR';


  constructor() { }

  ngOnInit(): void {
  }

}
