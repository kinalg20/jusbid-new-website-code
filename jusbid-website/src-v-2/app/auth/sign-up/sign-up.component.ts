import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginedUser } from 'src/app/_models';
import { ApiService } from 'src/app/_services/api.service';
import { UtilityService } from 'src/app/_services/utility.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  resMsg : string = '';
  constructor(
    public _apiService: ApiService,
    public router: Router,
  private  _utilityService : UtilityService
  ) { }

  ngOnInit(): void {
  }


  // user register function
  SignUp(form: NgForm) {
    let data = Object.assign({}, form.value);
    let userObj = {
      firstname: data.firstname ? data.firstname.trim() : '',
      lastname: data.lastname ? data.lastname.trim() : '',
      email: data.email,
      mobile: data.phonenumber,
      password: data.password,
    };
    this._apiService.CreateUser(userObj).subscribe(
      (res) => {
        if (res.responseCode == 200) {
          let logedinUserData: LoginedUser = res.data;
          this._utilityService.setObject({
            userId:logedinUserData.userId,
            userToken:logedinUserData.userToken
          },'user')
          this.router.navigateByUrl('/');
        }
        else {
           this.resMsg = res.msg;
          this._utilityService.removeObject("user");
        }
      }
    )
  }


}
