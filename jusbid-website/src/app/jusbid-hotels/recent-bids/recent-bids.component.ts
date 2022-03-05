import { Component, OnInit } from '@angular/core';
import { WebSocketIOService } from 'src/app/_services/web.socket.io.service';

@Component({
  selector: 'app-recent-bids-layout',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class RecentBidsComponent implements OnInit {

  constructor(private webSocketService: WebSocketIOService) { }

  ngOnInit(): void {
    this.webSocketService.listen('test event').subscribe(
      res => {
        if(res){
          console.log("Bid page", res);
        }
      }
    );

  }

}
