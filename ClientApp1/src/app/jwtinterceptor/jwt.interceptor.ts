import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    private currentUser: SocialUser;

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authService.authState.subscribe((user) => { this.currentUser = user; });

        if (this.currentUser) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.currentUser.idToken)
            });

            return next.handle(authReq);
        }

        return next.handle(req);

    }

}
