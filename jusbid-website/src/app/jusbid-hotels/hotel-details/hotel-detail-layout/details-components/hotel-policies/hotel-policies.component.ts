import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-policies',
  templateUrl: './hotel-policies.component.html',
  styleUrls: ['./hotel-policies.component.scss']
})
export class HotelPoliciesComponent implements OnInit {
  Refund_Policy: any = [];
  Cancellation_Policy: any = [];
  TermsConditions: any = [];
  Policy: any = [];
  Notice: any = [];
  @Input() hotelPolicy: any = {};
  constructor() { }

  ngOnInit(): void {
    this.getpoliciesdata();
  }

  getpoliciesdata() {
    this.hotelPolicy.map((res: any) => {
      if (res.type == "Terms") {
        this.TermsConditions.push(res.content);
      }

      if (res.type == "Policy") {
        this.Policy.push(res.content);
      }

      if (res.type == "Refund") {
        this.Refund_Policy.push(res.content);
      }

      if (res.type == "Notice") {
        this.Notice.push(res.content);
      }

      if (res.type == "Cancellation_Policy") {
        this.Cancellation_Policy.push(res.content);
      }
    })

  }


}


