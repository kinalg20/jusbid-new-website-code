import { Component, OnInit } from '@angular/core';
import { InputValidation } from 'src/app/_helpers/validation/input.validation';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.scss']
})
export class OtpLoginComponent implements OnInit {
  userOTP: string = '';
  sendOTP: boolean = false;
  reqPhoneNo: string = '';
  UserData: any = {};
  OTPCheck: any = '';
  resMsg: string = ''
  disableMobile: boolean = true;

  constructor(
    public _apiService: ApiService,
    public _InputValidation: InputValidation,
    private _utilityService: UtilityService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  // for change otp 
  onOtpChange(otp: any) {
    this.userOTP = otp;
  }

  //login to Phone number
  send_OTP() {
    this.sendOTP = true;
    if (this.reqPhoneNo.toString().length >= 10) {
      this._apiService.loginViaOTP({ mobile: this.reqPhoneNo }).subscribe(
        (res) => {
          if (res.responseCode == 200) {
            // userdata is show all details 
            this.UserData = res.data.userdata;
            //data key is generate a number , subtract 121212 to that  generated number and then after subtracted number send as Otp
            this.OTPCheck = res.data.datakey - 121212;
          }
          else {
            this._utilityService.Toast("Please enter your valid mobile number");
          }
        }

      );

    }
  }

  //  number is upto 10 then show enable button
  enableButton(event: any) {
    if (event.target.value.length === 10) {
      this.disableMobile = false;
    }
    else {
      this.disableMobile = true;
    }
  }

  //check verifyOTP
  verifyOTP() {
    if (this.userOTP == this.OTPCheck) {
      this._utilityService.setObject({
        userId: this.UserData.userId,
        userToken: this.UserData.userToken
      }, 'user')
      this.router.navigateByUrl('/');
    }
    else {
      this._utilityService.Toast('OTP is not valid');
    }
  }

}
