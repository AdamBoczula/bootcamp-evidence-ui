import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { DashboardCategory } from '../models/dashboard-category.type';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <a [routerLink]="['/login']">Back to login</a>

    <!-- <div *ngFor="let category of categoriesList$ | async">
      {{ category | json }}
    </div> -->
    @for (category of categoriesList$ | async; track category.title) {
      <li>{{ category | json }}</li>
    } @empty {
      <li>There are no items.</li>
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
