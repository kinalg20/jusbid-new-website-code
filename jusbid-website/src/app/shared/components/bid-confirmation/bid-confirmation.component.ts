import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bid-confirmation',
  templateUrl: './bid-confirmation.component.html',
  styleUrls: ['./bid-confirmation.component.scss']
})
export class BidConfirmationComponent implements OnInit {
  bidStatus:string="Book Now"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  booknow(){
    this.router.navigateByUrl('/hotels/recent-bookings');
  }

}
