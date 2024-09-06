import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardCategory } from '../../dashboard/models/dashboard-category.type';
import { CategoriesListItemComponent } from '../categories-list-item/categories-list-item.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule, CategoriesListItemComponent],
  template: `
    @for (category of categoriesList; track category.title) {
      <div class="category-list-container">
        <app-categories-list-item
          [category]="category"
          (categoryClicked)="openDialog($event)"
        />
      </div>
    } @empty {
      <h4>There are no items.</h4>
    }
  `,
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent {
  @Output()
  onCategoryClick = new EventEmitter<DashboardCategory>();

  @Input({ required: true })
  public categoriesList: DashboardCategory[] = [];

  public openDialog(category: DashboardCategory): void {
    this.onCategoryClick.emit(category);
  }
}
