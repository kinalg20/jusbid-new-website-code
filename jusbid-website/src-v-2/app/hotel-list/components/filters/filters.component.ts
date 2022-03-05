import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  rangeValues: number[] = [0, 100];

  constructor() { }

  ngOnInit(): void {
  }

}
