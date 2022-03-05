import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  activeForm: string = 'sign-in';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeForm(tab:string) {
    this.activeForm = tab;
  }
  gotoHome() {
    this.router.navigate(['/']);
  }

}
