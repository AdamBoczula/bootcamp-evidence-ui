import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  CategoryWithCost,
  CategoryWithSubcategories,
  DashboardCategory,
} from '../../dashboard/models/dashboard-category.type';
import { MatChipsModule } from '@angular/material/chips';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { ChipsSelectorComponent } from '../chips-selector/chips-selector.component';

@Component({
  selector: 'app-add-cost-form',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    CategoriesListComponent,
    ChipsSelectorComponent,
  ],
  template: `
    <h2 mat-dialog-title>Add {{ category.title }}</h2>

    {{ costForm.controls['cost'].value | json }}
    {{ costForm.controls['subcategory'].value | json }}

    <mat-dialog-content>
      <mat-icon
        aria-hidden="false"
        aria-label="Example home icon"
        [fontIcon]="category.icon"
        [ngStyle]="iconStyle"
      ></mat-icon>

      <form [formGroup]="costForm">
        <mat-form-field>
          <mat-label>Cost</mat-label>
          <input type="number" matInput formControlName="cost" />
        </mat-form-field>

        @if (
          category &&
          category.subcategories &&
          category.subcategories.length > 0
        ) {
          <app-chips-selector
            [chips]="category.subcategories"
            formControlName="subcategory"
          />
        }
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="saveCost()">Add cost</button>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styleUrl: './add-cost-form.component.scss',
})
export class AddCostFormComponent {
  public costForm = new FormGroup({
    cost: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
    subcategory: new FormControl(''),
  });
  public iconStyle = {
    color: this.category.color,
  };
  constructor(
    public dialogRef: MatDialogRef<AddCostFormComponent, CategoryWithCost>,
    @Inject(MAT_DIALOG_DATA) public category: CategoryWithSubcategories,
  ) {}

  public saveCost(): void {
    this.dialogRef.close({ category: this.category, cost: this.getCost() });
  }

  public getCost(): number {
    return this.costForm.get('cost')!.value as number;
  }
}
