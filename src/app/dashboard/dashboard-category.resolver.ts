import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DashboardService } from './dashboard.service';

export const dashboardCategoryResolver: ResolveFn<boolean> = (route, state) => {
  const dashboardService = inject(DashboardService);

  return dashboardService.fetchDashboardCategories();
};
