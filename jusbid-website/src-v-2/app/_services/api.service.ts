import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { User, LoginedUser } from '../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilityService } from './utility.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private LoginedUserSubject: BehaviorSubject<LoginedUser>;
  public Loginuser: Observable<LoginedUser>;

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @Output() getLoggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private httpService: HttpService,
    private utilityService: UtilityService,
    private router: Router
  ) {
    const user = this.utilityService.getDictObject('user')
    this.userSubject = new BehaviorSubject<User>(user);
    this.user = this.userSubject.asObservable();
    this.LoginedUserSubject = new BehaviorSubject<LoginedUser>(user);
    this.Loginuser = this.LoginedUserSubject.asObservable();

  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  getAllUser(): Observable<User[]> {
    return this.httpService.get('/users')
      .pipe(map(data => data as User[]));
  }

  getUser(id: number): Observable<User> {
    return this.httpService.get('/users/' + id);
  }

  logout(): any {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.getLoggedIn.emit(false);
    this.router.navigate(['/login']);
  }


  //Authentication  Api 

  // create agent request
  CreateUser(params: any) {
    let apiURL: string = `/create-front-user`;
    return this.httpService.post(apiURL, params);
  }


  //Login User
  loginViaEmailOrPhone(params: any) {
    let apiURL: string = '/front-user-login'
    return this.httpService.post(apiURL, params)
  }

  loginViaOTP(params: any) {
    // {
    //     "mobile":"9786325412"
    // }
    let apiURL: string = "/otp-login"
    return this.httpService.post(apiURL, params)
  }

  userResendEmail(params: any) {
    // { 
    //     "email" : "harshitashrimali03@gmail.com"
    // } 
    let apiURL: string = "/user-resend-email"
    return this.httpService.post(apiURL, params)
  }

  getUserInformationsByUid(uid: string) {
    let apiURL = `/get-user-profile`;
    return this.httpService.post(apiURL, { userId: uid });
  }

  //  Get Data
  getAllHotels(): Observable<any> {
    let params: any = { "city": "Udaipur", "state": "Rajasthan", "rooms": "1", "guestNo": "1", "arrival": "23-01-2022", "departure": "24-01-2022", "lat": "24.585445", "long": "73.712479" }
    return this.httpService.post('/home-search-new', params);
  }
}
