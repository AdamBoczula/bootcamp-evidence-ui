import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DashboardCategory } from '../../dashboard/models/dashboard-category.type';
import { CategoriesListItemComponent } from '../categories-list-item/categories-list-item.component';
import { AddCostFormComponent } from '../add-cost-form/add-cost-form.component';
import { DialogRef } from '@angular/cdk/dialog';

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
  private readonly dialog: MatDialog = inject(MatDialog);
  private dialogRef!: MatDialogRef<AddCostFormComponent, any>;

  @Input({ required: true })
  public categoriesList: DashboardCategory[] = [];

  public openDialog(category: DashboardCategory): void {
    this.dialogRef = this.dialog.open(AddCostFormComponent, {
      data: category,
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed:', result);
    });
  }
}
