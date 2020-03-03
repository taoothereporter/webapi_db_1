import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    private currentUser: SocialUser;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.authState.subscribe((user) => { this.currentUser = user; });

        if (this.currentUser) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
