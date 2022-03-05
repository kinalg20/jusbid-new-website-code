import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {

    windowScrolled!: boolean;
    city_name = [
        { id: 1, cityname: "Hotels in Amritsar" },
        { id: 2, cityname: "Hotels in Udaipur" },
        { id: 3, cityname: "Hotels in Dehradun" },
        { id: 4, cityname: "Hotels in Bengaluru" },
        { id: 5, cityname: "Hotels in Madikeri" },
        { id: 6, cityname: "Hotels in Kolkata" },
        { id: 7, cityname: "Hotels in Kodaikanal" },
        { id: 8, cityname: "Hotels in Coimbatore" },
        { id: 9, cityname: "Hotels in Haridwar" },
        { id: 10, cityname: "Hotels in Delhi" },
        { id: 11, cityname: "Hotels in New Delhi" },
        { id: 12, cityname: "Hotels in Idukki" },
        { id: 13, cityname: "Hotels in Cochin" },
        { id: 14, cityname: "Hotels in Munnar" },
        { id: 15, cityname: "Hotels in Villupuram" },
        { id: 16, cityname: "Hotels in Chennai" },
        { id: 17, cityname: "Hotels in Mussoorie" },
        { id: 18, cityname: "Hotels in Mysore" },
        { id: 19, cityname: "Hotels in Gwalior" },
        { id: 20, cityname: "Hotels in Vīrarājendrapet" },
        { id: 21, cityname: "Hotels in Kochi" },
        { id: 22, cityname: "Hotels in Manali" },
        { id: 23, cityname: "Hotels in Pondicherry" },
        { id: 24, cityname: "Hotels in Rajsamand" },
    ];
    constructor(private router : Router) { }

  ngOnInit() { }


  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    if (window.pageYOffset >= 100) { this.windowScrolled = true; }
    else { this.windowScrolled = false; }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  cityLink() {
    this.router.navigateByUrl ('/hotels/hotel-search');
  }
}
