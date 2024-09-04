import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesListComponent } from '../../component/categories-list/categories-list.component';
import { DashboardService } from '../dashboard.service';
import {
  CategoryWithSubcategories,
  DashboardCategory,
} from '../models/dashboard-category.type';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterModule, CommonModule, CategoriesListComponent],
  template: `
    @if (categoriesList$ | async) {
      <app-categories-list
        [categoriesList]="(categoriesList$ | async) ?? []"
        (onCategoryClick)="fetchSubcategories($event)"
        [categoryWithSubcategories$]="categoryWithSubcategories$"
      />
    }
  `,
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {
  public categoriesList$: Observable<DashboardCategory[]>;
  public categoryWithSubcategories$:
    | Observable<CategoryWithSubcategories>
    | undefined;

  constructor(private dashboardService: DashboardService) {
    this.ngOnInit();
    this.categoriesList$ = this.dashboardService.dashboardCategriesList$;
  }

  public ngOnInit(): void {
    this.dashboardService.fetchDashboardCategories();
  }

  public fetchSubcategories(dashboardCategory: DashboardCategory): void {
    this.dashboardService.openCostModal(dashboardCategory);
  }
}
