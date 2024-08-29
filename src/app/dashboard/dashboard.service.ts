import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DASHBOARD_CATEGORIES_LIST } from './constants/dashboard-categories';
import { DashboardCategory } from './models/dashboard-category.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpC: HttpClient) {}

  private _dashboardCategoriesList$ = new BehaviorSubject<DashboardCategory[]>(
    [],
  );
  public dashboardCategriesList$ =
    this._dashboardCategoriesList$.asObservable();

  public fetchDashboardCategories(): Observable<boolean> {
    this._dashboardCategoriesList$.next([...DASHBOARD_CATEGORIES_LIST]);
    return of(true);
  }

  public getjson(): Observable<any> {
    return this.httpC.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
