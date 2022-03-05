import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqData: any = [];

  constructor(private _ApiService: ApiService) { }

  ngOnInit(): void {
    this._ApiService.getFAQ().subscribe(res => {
      res.data.map((res: any) => {
        this.faqData.push(res);
      })
    });
  }
}
