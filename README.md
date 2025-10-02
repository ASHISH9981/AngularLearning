# Angular Parent-Child Example

This is a minimal Angular example demonstrating:

- Parent -> Child data via @Input
- Child -> Parent events via @Output and EventEmitter
- Parent calling a child method via @ViewChild
- Routing to a child route component

Files of interest:

- `src/app/parent/parent.component.ts` - Parent hosting `app-child` and interacting via inputs/outputs and ViewChild
- `src/app/child/child.component.ts` - Child exposing @Input and @Output and a public method
- `src/app/child-route/child-route.component.ts` - Component loaded via Router

Run (requires Node >= 18 and the Angular CLI or using npm scripts):

1. Install dependencies

```bash
npm install
```

2. Start dev server (if you have @angular/cli installed locally this will work):

```bash
npm start
```

If you don't have the Angular CLI globally installed, the local dev server will still run thanks to the npm script invoking the local `ng` binary.

Routing in this example:

- `/` loads the `ParentComponent` which contains the `ChildComponent` used via template composition.
- `/child-route` loads `ChildRouteComponent` through the Router.

Notes:
- This project is a small scaffold for demonstration and intentionally uses Angular standalone components and the `bootstrapApplication` API for simplicity.
- If you prefer a full CLI-generated workspace, run `ng new my-app` and copy the `src/app` components into it.
