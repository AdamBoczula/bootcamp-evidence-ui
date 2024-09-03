import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  DASHBOARD_CATEGORIES_LIST,
  SUBCATEGORIES,
} from './constants/dashboard-categories';
import {
  CategoryWithSubcategories,
  DashboardCategory,
} from './models/dashboard-category.type';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly modal: MatDialog) {}

  private _dashboardCategoriesList$ = new BehaviorSubject<DashboardCategory[]>(
    [],
  );
  public dashboardCategriesList$ =
    this._dashboardCategoriesList$.asObservable();

  public fetchDashboardCategories(): Observable<boolean> {
    this._dashboardCategoriesList$.next([...DASHBOARD_CATEGORIES_LIST]);
    return of(true);
  }

  public fetchSubcategoriesByCategory(
    dashboardCategory: DashboardCategory,
  ): Observable<CategoryWithSubcategories> {
    const subcategories = SUBCATEGORIES[dashboardCategory.id];

    return subcategories
      ? of({ ...dashboardCategory, subcategories } as CategoryWithSubcategories)
      : of({ ...dashboardCategory });
  }
}
