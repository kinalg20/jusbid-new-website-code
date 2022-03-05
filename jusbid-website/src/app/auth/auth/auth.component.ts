import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  activeForm: string = 'sign-in';

  constructor(private router: Router,
    private authService: SocialAuthService,
    private _utilityService: UtilityService,
    private dataService: DataService) { }

  ngOnInit(): void { }

  changeForm(tab: string): void {
    this.activeForm = tab;
  }

  goBack(): void {
    window.history.back();
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        console.log("Loged In User", user);
        this._utilityService.setObject(user, 'GoogleOAuth_USER')
        this.dataService.loginedUserSubject.next(user);
        window.history.back();
      }
    );
  }

}
