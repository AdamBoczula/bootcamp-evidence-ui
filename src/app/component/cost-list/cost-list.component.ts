import { Component, Input } from '@angular/core';
import { CategoryWithCost } from '../../dashboard/models/dashboard-category.type';
import { CostListItemComponent } from '../cost-list-item/cost-list-item.component';

@Component({
  selector: 'app-cost-list',
  standalone: true,
  imports: [CostListItemComponent],
  template: `
    @for (cost of costs; track $index) {
      <app-cost-list-item [cost]="cost" />
    } @empty {
      <h4>There is no costs yet!</h4>
    }
  `,
  styleUrl: './cost-list.component.scss',
})
export class CostListComponent {
  @Input({ required: true })
  public costs!: CategoryWithCost[];
}
