import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  DASHBOARD_CATEGORIES_LIST,
  SUBCATEGORIES,
} from './constants/dashboard-categories';
import {
  CategoryWithSubcategories,
  DashboardCategory,
} from './models/dashboard-category.type';
import { AddCostFormComponent } from '../component/add-cost-form/add-cost-form.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly dialog: MatDialog = inject(MatDialog);

  constructor() {}

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

  public openCostModal(dashboardCategory: DashboardCategory): void {
    this.fetchSubcategoriesByCategory(dashboardCategory).subscribe(
      (categoryWithSub: CategoryWithSubcategories) => {
        const dialogRef = this.dialog.open(AddCostFormComponent, {
          data: categoryWithSub,
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          console.log('The dialog was closed:', result);
        });
      },
    );
  }
}
