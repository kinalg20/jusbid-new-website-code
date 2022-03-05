import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private _param: any = null;

    constructor(
        private router: Router,
        private apiService: ApiService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.apiService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }

        const queryParamsString = new HttpParams({ fromObject: route.queryParams }).toString();
        if (queryParamsString.length === 0) {
            this.router.navigate(['/login']);
        } else {
            this.router.navigate(['/login'], { queryParams: route.queryParams });
        }

        return false;
    }

    isUserLoggedIn(): boolean {
        const user: any = this.apiService.userValue;
        if (user && user.accessToken) {
            return true;
        }
        return false;
    }

    getUserEmail(): any {
        const user: any = this.apiService.userValue;
        return user.email;
    }

    getUserName(): any {
        const user: any = this.apiService.userValue;
        return user.name ? user.name : '';
    }
}
