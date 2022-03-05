import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InputValidation } from 'src/app/_helpers/validation/input.validation';
import { LoginedUser } from 'src/app/_models';
import { ApiService } from 'src/app/_services/api.service';
import { DataService } from 'src/app/_services/data.service';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    public _apiService: ApiService,
    public _InputValidation: InputValidation,
    private _utilityService: UtilityService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  error: any = {};
  // user login with email and password  
  signinWithEmail(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.error = this.validedEmailPhone(data.email);

    if (!this.error.errorMsg) {
      let loginobj = {
        user: data.email,
        password: data.password,
      };

      this._apiService.loginViaEmailOrPhone(loginobj).subscribe(
        (res) => {
          // if admin blocked any user they can login 

          if (
            res.responseCode === 200 &&
            (res.data.role === 6 || res.data.role === 4)
          ) {
            if (res.data.status === 'Blocked') {
              this._utilityService.Toast("Sorry you can't login! You are Blocked from Admin.");
            }
            // login details set on localStorage 
            else {
              let logedinUserData: LoginedUser = res.data;
              this._utilityService.setObject({
                userId: logedinUserData.userId,
                userToken: logedinUserData.userToken
              }, 'user')
              this.dataService.loginedUserSubject.next(logedinUserData);
              this.router.navigateByUrl('/');
            }
          }
          //remove login credentials
          else {
            this._utilityService.Toast(res.msg);
            this._utilityService.removeObject("user");
          }
        },
      )
    }
  }

  validedEmailPhone(value: any) {
    let isPhoneOrEmail: string = '';
    let errorMsg: string = '';
    if (value.length > 0) {
      if (value.match(/^\d/)) {
        isPhoneOrEmail = 'phone';
        if (!this._InputValidation.phoneValidator(value)) {
          errorMsg = 'Please Enter Valid Mobile Number';
        }
      } else {
        isPhoneOrEmail = 'email';
        if (!this._InputValidation.emailValidator(value)) {
          errorMsg = 'Please Enter Valid Email';
        }
      }
    } else {
      isPhoneOrEmail = '';
      errorMsg = 'Field is required.';
    }
    return { value, isPhoneOrEmail, errorMsg, isError: errorMsg != '' ? true : false };
  }

}
