import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { DataService, DashboardData, RootObject, Circle1, Circle2, Category } from '../dataservice/data.service';
import { Observable } from 'rxjs';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private authService: AuthService, private dataService: DataService, private router: Router) {
    }

    public currentUser: SocialUser;

    public rootObject: RootObject;

    @Input() public selectedYear: DashboardData;

    @Output() public selectedYearChange = new EventEmitter<DashboardData>();

    public view: any[] = [400, 300];

    onYearSelect(event, kpi) {
        this.selectedYear = kpi;
    }

    selectYear(kpi: DashboardData) {
        this.selectedYear = kpi;
        this.selectedYearChange.emit(this.selectedYear);
    }

    signOut() {
        this.authService.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

    circle1Data(circle: Circle1): any {
        return [{ 'value': 100 * circle.value, 'name': circle.value + '/' + circle.maxValue }];
    }

    circle2Data(circle: Circle2): any {
        return [{ 'value': 100 * circle.value, 'name': circle.value * 100 + '%' + '/100%' }];
    }

    fetchData() {
        this.dataService
                .getData()
                .subscribe((data: RootObject) => {
                                                    this.rootObject = data;
                                                    this.selectedYear = this.rootObject.dashboardData[0];
                                                });
    }

    setMyStyles(minNumber: number, maxNumber: number) {

        let styles = {
            'width': 100 * minNumber / maxNumber + '%'
        };

        return styles;
    }

    ngOnInit() {

        this.fetchData();

        this.authService.authState.subscribe((user) => {
            this.currentUser = user;
            // if (!this.currentUser) {
            //     this.router.navigate(['/login']);
            // }
        });
    }

}
