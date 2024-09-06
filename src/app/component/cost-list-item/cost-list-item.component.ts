import { Component, Input } from '@angular/core';
import { CategoryWithCost } from '../../dashboard/models/dashboard-category.type';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cost-list-item',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  template: `
    <div class="name-icon-wrapper" [ngStyle]="{ color: cost.category.color }">
      <mat-icon
        aria-hidden="false"
        aria-label="Cost category icon"
        [fontIcon]="cost.category.icon"
      ></mat-icon>
      {{ cost.category.title }}
      @if (cost.subcategory && cost.subcategory.length > 0) {
        - {{ cost.subcategory }}
      }
    </div>
    {{ cost.cost }}
  `,
  styleUrl: './cost-list-item.component.scss',
})
export class CostListItemComponent {
  @Input({ required: true })
  public cost!: CategoryWithCost;
}
