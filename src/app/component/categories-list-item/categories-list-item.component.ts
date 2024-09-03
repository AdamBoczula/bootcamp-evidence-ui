import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DashboardCategory } from '../../dashboard/models/dashboard-category.type';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-categories-list-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <mat-icon
      aria-hidden="false"
      aria-label="Example home icon"
      [fontIcon]="category.icon"
    ></mat-icon>
    <h6>{{ category.title }}</h6>
  `,
  styleUrl: './categories-list-item.component.scss',
})
export class CategoriesListItemComponent {
  @Input({ required: true })
  public category!: DashboardCategory;

  @Output()
  public categoryClicked = new EventEmitter<DashboardCategory>();

  @HostBinding('style.color') get color() {
    return this.category.color;
  }

  @HostListener('click', ['$event.target'])
  hostClicked(): void {
    this.categoryClicked.emit(this.category);
  }
}
