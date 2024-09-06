import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, ObservedValueOf } from 'rxjs';
import { CategoriesListComponent } from '../../component/categories-list/categories-list.component';
import { DashboardService } from '../dashboard.service';
import {
  CategoryWithCost,
  DashboardCategory,
} from '../models/dashboard-category.type';
import { CostListComponent } from '../../component/cost-list/cost-list.component';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    CategoriesListComponent,
    CostListComponent,
  ],
  template: `
    @if (categoriesList$ | async) {
      <div class="block-container">
        <app-categories-list
          [categoriesList]="(categoriesList$ | async) ?? []"
          (onCategoryClick)="fetchSubcategories($event)"
        />
      </div>
    }
    @if (costStore$ | async) {
      <div class="block-container">
        <app-cost-list [costs]="(costStore$ | async) ?? []" />
      </div>
    }
  `,
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {
  public categoriesList$: Observable<DashboardCategory[]>;
  public costStore$: Observable<CategoryWithCost[]>;

  constructor(private dashboardService: DashboardService) {
    this.ngOnInit();
    this.categoriesList$ = this.dashboardService.dashboardCategriesList$;
    this.costStore$ = this.dashboardService.costStore$;
  }

  public ngOnInit(): void {
    this.dashboardService.fetchDashboardCategories();
  }

  public fetchSubcategories(dashboardCategory: DashboardCategory): void {
    this.dashboardService.openCostModal(dashboardCategory);
  }
}
