import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Circle1 {
    id: number;
    value: number;
    maxValue: number;
}

export interface Circle2 {
    id: number;
    value: number;
}

export interface Category {
    id: number;
    title: string;
    value: number;
    maxValue: number;
}

export interface DashboardData {
    id: number;
    year: number;
    circle1: Circle1;
    circle2: Circle2;
    categories: Category[];
}

export interface RootObject {
    dashboardData: DashboardData[];
}

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    getData(): Observable<RootObject> {
        return this.http.get<RootObject>('https://localhost:5001/DataProvider/');
    }

}
