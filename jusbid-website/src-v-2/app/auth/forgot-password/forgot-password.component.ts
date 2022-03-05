import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isError: boolean = false;
  constructor(
    public _apiService: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // resend password on email 
  userResendEmail(form: NgForm) {
    let data = Object.assign({}, form.value);
    this._apiService.userResendEmail({ email: data.email }).subscribe(
      res => {
        //   this.resMsg = res.msg;
        if (res.responseCode == 200) {
          this.isError = false;
        }
        else {
          this.isError = true;
        }
        
        setTimeout(() => {
          // this.resMsg = '';
          form.reset();
        }, 3000);
      }
    );
  }

  //  disable button when put a correct email
  disableForgotPassword: boolean = true;
  enableButton(event: any) {
  }
  
  gotoHome() {
    this.router.navigate(['/']);
  }
}
