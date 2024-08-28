import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterModule],
  template: ` <a [routerLink]="['/login']">Back to login</a> `,
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {}
