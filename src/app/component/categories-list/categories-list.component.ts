import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import {
  CategoryWithSubcategories,
  DashboardCategory,
} from '../../dashboard/models/dashboard-category.type';
import { AddCostFormComponent } from '../add-cost-form/add-cost-form.component';
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
