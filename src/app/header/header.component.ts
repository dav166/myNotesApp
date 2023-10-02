import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  template: `
  <app-header />
  <app-menu />
  <p>Root Component</p>
  `,
  styleUrls: ['./AppComponent.component.css'],
  imports: [HeaderComponent], [MenuComponent],
})
export class AppComponent {

}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<app-menu />
  <h1>My Header</h1>
    <p>
      header works!
    </p>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
