import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <div class="card">
      <h3>Child Component</h3>
      <p>Incoming: {{ incoming }}</p>
      <input [(ngModel)]="childLocal" />
      <button (click)="emitToParent()">Emit to Parent</button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChildComponent {
  @Input() incoming = '';
  @Output() notify = new EventEmitter<string>();

  childLocal = '';

  emitToParent() {
    this.notify.emit(this.childLocal || 'Child clicked with empty input');
  }

  // Method parent can call
  doSomethingFromParent() {
    this.childLocal = 'Updated by parent()';
    this.notify.emit('Parent called child method');
  }
}
