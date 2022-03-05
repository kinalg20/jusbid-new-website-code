import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { range } from "rxjs";
import { UtilityService } from "src/app/_services/utility.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  @Output() sendRangeValue = new EventEmitter();
  filteredHotel: any = [];
  rangeValues: number[] = [0, 100];
  index: Array<number> = [];
  selectedvalue: boolean = false;
  amenitiesFilter: any = [];
  hotelAmenityData: any = [];
  hotelCategoryData: any = [];
  checkedAmenity: any = [];
  checkedCategory: any = [];
  hotelListDetails: any = [];
  hotelPrices: any = [];
  maximum: number = 100;
  isShowAllAmenities: boolean = false;
  isShowAllCategories: boolean = false;
  @Input() hotelData: any = [];
  constructor(private _utility: UtilityService) {}
  ngOnInit(): void {
    this.priceRange();
    this._utility.hotelAminities.subscribe({
      next: (grca) => {
        if (grca) {
          this.hotelAmenityData = grca;
        }
      },
    });
    this.getAmenityCategoryData();
    this.sendRangeValue.emit(this.rangeValues);
  }
  getAmenityCategoryData() {
    this.hotelData.map((res: any) => {
      res.hotel_amenities.map((res: any) => {
        var fetchdata = this._utility.getDataByAttr(
          this.hotelAmenityData,
          "id",
          res
        );
        if (this.amenitiesFilter.indexOf(fetchdata) === -1) {
          this.amenitiesFilter.push(fetchdata);
        }
      });
      if (res) {
        if (this.hotelCategoryData.indexOf(res.category) === -1) {
          this.hotelCategoryData.push(res.category);
        }
      }
    });
  }

  getAmenityFilter(amenityobject: any) {
    if (this.checkedAmenity.includes(amenityobject)) {
      const index = this.checkedAmenity.indexOf(amenityobject);
      if (index > -1) {
        this.checkedAmenity.splice(index, 1);
      }
    } else {
      this.checkedAmenity.push(amenityobject);
    }
  }

  getCatagoryFilter(categoryobject: any) {
    if (this.checkedCategory.includes(categoryobject)) {
      const index = this.checkedCategory.indexOf(categoryobject);
      if (index > -1) {
        this.checkedCategory.splice(index, 1);
      }
    } else {
      this.checkedCategory.push(categoryobject);
    }
  }
  priceRange() {
    this.hotelData.map((res: any) => {
      this.hotelPrices.push(res.room_price);
    });
    let range1 = Math.min(...this.hotelPrices);
    let range2 = Math.max(...this.hotelPrices);
    this.maximum = (range2 * 35) / 100 + range2;
    this.rangeValues = [range1, range2];
  }

  //get hotel after change range slider value
  handleChange(e: any) {
    this.filteredHotel = [];
    this.hotelData.map((res: any) => {
      if (
        this.rangeValues[0] <= res.room_price &&
        res.room_price <= this.rangeValues[1]
      ) {
        this.filteredHotel.push(res);
      }
    });
    console.log(this.filteredHotel);
  }

  showAmenities: number = 5;
  showAll(ərray: any[]) {
    let len = ərray.length;
    this.isShowAllAmenities = !this.isShowAllAmenities;
    this.showAmenities = this.isShowAllAmenities ? len : 5;
  }
  showCategories: number = 1;
  showAllCategories(Array: any[]) {
    let len = Array.length;
    this.isShowAllCategories = !this.isShowAllCategories;
    this.showCategories = this.isShowAllCategories ? len : 1;
  }
}
