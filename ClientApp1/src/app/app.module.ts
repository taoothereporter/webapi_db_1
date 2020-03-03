import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

// import { NavMenuComponent } from './nav-menu/nav-menu.component';
// import { CounterComponent } from './counter/counter.component';

import { AuthGuard } from './guard';

import { JWTInterceptor } from './jwtinterceptor';
import { DataService } from './dataservice';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('125836197401-j42npcl5tv514ngdg7emcfts086i4nr9.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // NavMenuComponent,
    // CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    NgxChartsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
      // { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent }
    ])
  ],
  providers: [
    DataService,
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
