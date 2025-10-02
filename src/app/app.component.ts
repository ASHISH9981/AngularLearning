import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Parent-Child Example</h1>
    <nav>
      <a routerLink="/">Parent</a> |
      <a routerLink="/child-route">Child (Route)</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {}
