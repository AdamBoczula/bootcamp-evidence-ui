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
import {
  CategoryWithSubcategories,
  DashboardCategory,
} from '../../dashboard/models/dashboard-category.type';
import { AddCostFormComponent } from '../add-cost-form/add-cost-form.component';
import { CategoriesListItemComponent } from '../categories-list-item/categories-list-item.component';
import { Observable, ObservedValueOf, Subscription } from 'rxjs';

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
export class CategoriesListComponent implements OnDestroy, OnChanges {
  private readonly dialog: MatDialog = inject(MatDialog);
  private dialogRef!: MatDialogRef<AddCostFormComponent, any>;
  public subs?: Subscription;
  @Output()
  onCategoryClick = new EventEmitter<DashboardCategory>();

  @Input({ required: true })
  public categoriesList: DashboardCategory[] = [];

  @Input()
  public categoryWithSubcategories$:
    | Observable<CategoryWithSubcategories>
    | undefined;

  public openDialog(category: DashboardCategory): void {
    this.onCategoryClick.emit(category);
  }

  ngOnChanges(changes: SimpleChanges): void {
    (
      changes['categoryWithSubcategories$'].currentValue as
        | Observable<CategoryWithSubcategories>
        | undefined
    )?.subscribe((categoryWithSubcategories: CategoryWithSubcategories) => {
      this.subs = this.categoryWithSubcategories$?.subscribe(
        (categoryWithSub: CategoryWithSubcategories) => {
          this.dialogRef = this.dialog.open(AddCostFormComponent, {
            data: categoryWithSubcategories,
          });
          this.dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed:', result);
          });
        },
      );
    });
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
