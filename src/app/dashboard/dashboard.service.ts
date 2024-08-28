import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DASHBOARD_CATEGORIES_LIST } from './constants/dashboard-categories';
import { DashboardCategory } from './models/dashboard-category.type';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  private _dashboardCategoriesList$ = new BehaviorSubject<DashboardCategory[]>(
    [],
  );
  public dashboardCategriesList$ =
    this._dashboardCategoriesList$.asObservable();

  public fetchDashboardCategories(): void {
    setTimeout(() => {
      this._dashboardCategoriesList$.next([...DASHBOARD_CATEGORIES_LIST]);
    }, 1000);
  }
}
