import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div class="card">
      <h2>Parent Component</h2>
      <p>Message for child (via @Input):</p>
      <input [(ngModel)]="messageForChild" />
      <button (click)="sendToChild()">Send to child</button>

      <hr />
      <app-child [incoming]="childMessage" (notify)="onNotify($event)" #childComp></app-child>

      <p>Last event from child: {{ lastFromChild }}</p>
      <button (click)="callChildMethod()">Call child method via @ViewChild</button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent]
})
export class ParentComponent {
  messageForChild = 'Hello from Parent (two-way bound input)';
  childMessage = 'Initial incoming message';
  lastFromChild = '';

  @ViewChild('childComp') child!: ChildComponent;

  sendToChild() {
    this.childMessage = this.messageForChild;
  }

  onNotify(msg: string) {
    this.lastFromChild = msg;
  }

  callChildMethod() {
    if (this.child) {
      this.child.doSomethingFromParent();
    }
  }
}
