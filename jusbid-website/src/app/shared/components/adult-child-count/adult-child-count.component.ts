import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'app-adult-child-count',
  templateUrl: './adult-child-count.component.html',
  styleUrls: ['./adult-child-count.component.scss']
})
export class AdultChildCountComponent implements OnInit {

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.utilityService.adultChildCounts.subscribe({
      next: (grca) => {
        if (grca && grca.adultCount && grca.childCount) {
          this.initialAdultchildCount['adultCount'] = grca.adultCount;
          this.initialAdultchildCount['childCount'] = grca.childCount;
        }
      }
    });

    if(this.initialAdultchildCount.adultCount>1){
      this.disableAdultCountbutton=false;
    }
    if(this.initialAdultchildCount.childCount>0){
      this.disableChildCountbutton=false;
    }
  }

  initialAdultchildCount = {
    adultCount: 1,
    childCount: 0
  }
  disableChildCountbutton: boolean = true;
  disableAdultCountbutton: boolean = true;
  totalAdultChildCounter: any;
  @Output() closeContainer = new EventEmitter<boolean>();
  @Output() totalAdultChildCount = new EventEmitter<any>();

  decrementadult() {
    if (this.initialAdultchildCount.adultCount > 1) {
      this.initialAdultchildCount.adultCount = this.initialAdultchildCount.adultCount - 1;
    }
    if (this.initialAdultchildCount.adultCount == 1) {
      this.disableAdultCountbutton = true;
    }
  }

  incrementadult() {
    this.initialAdultchildCount.adultCount = this.initialAdultchildCount.adultCount + 1;
    this.disableAdultCountbutton = false;
  }

  decrementchild() {
    if (this.initialAdultchildCount.childCount > 0) {
      this.initialAdultchildCount.childCount = this.initialAdultchildCount.childCount - 1;
    }
    if (this.initialAdultchildCount.childCount == 0) {
      this.disableChildCountbutton = true;
    }
  }

  incrementchild() {
    this.initialAdultchildCount.childCount = this.initialAdultchildCount.childCount + 1;
    this.disableChildCountbutton=false;
  }

  closemodel(close: boolean) {
    console.log(close);
    this.closeContainer.emit(close);
  }

  totaladultchildcount() {
    this.closeContainer.emit(false);
    this.totalAdultChildCount.emit(this.initialAdultchildCount);
    this.utilityService.adultChildCounts.next(this.initialAdultchildCount);
  }
}
