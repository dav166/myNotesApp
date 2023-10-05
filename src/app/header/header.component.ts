import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: ['./header.component.html']
  styleUrls: ['./header.component.css']
  template: `
    <h1>
      My Header
    </h1>
    <app-menu />
  `,
})
export class HeaderComponent {
  name = 'James';
}
