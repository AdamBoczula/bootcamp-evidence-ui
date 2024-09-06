import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, CommonModule],
  template: `<mat-toolbar>
    <span class="header-title" (click)="onTitleClick.emit()">{{
      headerTitle | titlecase
    }}</span>
  </mat-toolbar>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true })
  public headerTitle = '';

  @Output()
  public onTitleClick = new EventEmitter<void>();
}
