# Angular 19 Feature Showcase

🚀 Modern Angular 19 showcase project demonstrating expertise in Signal API, NgRx state management, RxJS operators, and custom directives. Features include a robust Todo app, HTTP interceptors, and reactive forms. Implements best practices with standalone components and OnPush change detection.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Features

### 1. Custom Directives
* `HighlightDirective`: Changes background color on hover
* `TaskDirective`: Manages task list item styling
  - Dynamic background color based on task completion
  - Custom hover effects
* `ToolTipDirective`: Custom tooltip implementation
  - Dynamic content display
  - Mouse enter/leave events

### 2. Signal API Implementation
* Demonstrates Angular 19's new Signal API features
* Various signal types implemented:
  - Primitive signals (`firstName`, `lastName`)
  - Array signals (`cityList`)
  - Object signals (`stateList`)
* Signal state management
* Integration with OnPush change detection
* Computed signals and effects

### 3. Counter using NgRx Store
* Complete Redux pattern implementation
* Store features:
  - State management with `counterReducer`
  - Action creators: `increment` and `decrement`
  - Store selectors
  - Observable state management
* Integration across multiple components
* Async pipe implementation

### 4. Todo List Application
* Dual implementations:
  - `TodoComponent`
  - `TaskComponent`
* Core Features:
  - ✅ Add/Edit/Delete tasks
  - 🔄 Task completion toggling
  - 💾 Local storage persistence
  - 📝 Reactive form implementation
  - 🎨 Dynamic styling for completed tasks
  - 🔍 Tooltip integration

### 5. HTTP Interceptor
* Custom HTTP interceptor with:
  - Request/Response logging
  - Error handling
  - JWT token integration capability
* Global HTTP request/response manipulation
* Headers modification support

### 6. RxJS Features
* Basic RxJS Operations (`RxjsBasicComponent`):
  - Observable creation (`of`, `from`)
  - Time-based operators (`interval`, `timer`)
  - `Subject` and `BehaviorSubject`
  
* Advanced RxJS (`RxjsCombineComponent`):
  - Transformation operators (`mergeMap`, `switchMap`)
  - Combination operators (`forkJoin`)
  - Form control integration
  - HTTP request handling
  - JSONPlaceholder API integration

### 7. Routing & Navigation
* Feature-based routing structure
* Implementation includes:
  - Child routes
  - Route parameters
  - Navigation guards
  - Router events handling

### 8. Additional Features
* Modern Angular practices:
  - Standalone components
  - Dependency injection patterns
  - OnPush change detection
  - Reactive Forms
  - Component communication

## Project Structure
```
src/
├── app/
│   ├── components/
│   ├── directives/
│   ├── services/
│   ├── store/
│   └── interceptors/
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
