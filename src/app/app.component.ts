import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `<app-header
      [headerTitle]="title"
      (onTitleClick)="onTitleClick()"
    />
    <router-outlet /> `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'Cost Evidence';
  public onTitleClick(): void {}
}
