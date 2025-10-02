import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildRouteComponent } from './child-route/child-route.component';

export const appRoutes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'child-route', component: ChildRouteComponent },
  { path: '**', redirectTo: '' }
];
