import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "jusbid-search-form",
  templateUrl: "./jusbid-search-form.component.html",
  styleUrls: ["./jusbid-search-form.component.scss"],
})
export class JusbidSearchFormComponent implements OnInit {
  heading: string = "Not sure where to go? Perfect.";
  sub_heading: string =
    " We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?";

  @Output() activePage = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  activeTab:string='';
  routeTab(slug: any) {
    this.activeTab=slug;
    this.activePage.emit(slug);
    this.router.navigateByUrl(slug);
  }
}
