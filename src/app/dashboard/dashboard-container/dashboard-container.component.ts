import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { delay, map, Observable, Subject, switchMap } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { DashboardCategory } from '../models/dashboard-category.type';
import { CategoriesListComponent } from '../../component/categories-list/categories-list.component';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterModule, CommonModule, CategoriesListComponent],
  template: `
    @if (categoriesList$ | async) {
      <app-categories-list [categoriesList]="(categoriesList$ | async) ?? []" />
    }
  `,
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {
  public categoriesList$: Observable<DashboardCategory[]>;
  constructor(private dashboardService: DashboardService) {
    this.ngOnInit();
    this.categoriesList$ = this.dashboardService.dashboardCategriesList$;
  }

  public ngOnInit(): void {
    this.dashboardService.fetchDashboardCategories();
  }
}
