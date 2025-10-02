import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-route',
  template: `
    <div class="card">
      <h2>Child Route Component</h2>
      <p>This component is loaded via the Router (route: /child-route).</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ChildRouteComponent {}
