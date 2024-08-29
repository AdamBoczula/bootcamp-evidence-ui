import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { delay, map, Observable, Subject, switchMap } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { DashboardCategory } from '../models/dashboard-category.type';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <a [routerLink]="['/login']">Back to login</a>
    @for (category of categoriesList$ | async; track category.title) {
      <li>{{ category | json }}</li>
    } @empty {
      <li>There are no items.</li>
    }

    <button (click)="click$.next()">Filter something</button>
  `,
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {
  public categoriesList$: Observable<DashboardCategory[]>;
  public click$ = new Subject<void>();
  constructor(private dashboardService: DashboardService) {
    this.ngOnInit();
    this.categoriesList$ = this.dashboardService.dashboardCategriesList$;
  }

  public ngOnInit(): void {
    this.dashboardService.fetchDashboardCategories();
  }
}
