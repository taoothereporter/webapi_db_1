import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    private currentUser: SocialUser;

    constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

    signIn() {
        // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
        //     .then((userData) => {
        //         this.http.post(`https://localhost:5001/api/Authorization/getvalues`, '',
        //                         { headers: new HttpHeaders().set('Authorization', 'Bearer ' + userData.idToken)})
        //                     .subscribe(
        //                         (data: any) => {
        //                             // console.log(data);
        //                             this.router.navigate(['/kpi']);
        //                         }, error => console.log(error));
        //     });

        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
            .then((userData) => {
                this.router.navigate(['/dashboard']);
            }, (error) => console.log(error));
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
            // if (this.currentUser) {
            //     this.router.navigate(['/']);
            // }
        });
    }
}
