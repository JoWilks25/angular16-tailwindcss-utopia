# NewBuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Styling
Uses Tailwind with Utopia
https://tailwindcss.com/docs/guides/angular

https://github.com/domchristie/tailwind-utopia

### Typographic Scale
The default font-size utility classes are as follows:\
```
text-fl-xs
text-fl-sm
text-fl-base
text-fl-lg
text-fl-xl
text-fl-2xl
text-fl-3xl
text-fl-4xl
```

### Spacing Scale
The default spacing utility classes are as follows:
```
<utility>-fl-3xs
<utility>-fl-2xs
<utility>-fl-xs
<utility>-fl-sm
<utility>-fl-md
<utility>-fl-lg
<utility>-fl-xl
<utility>-fl-2xl
<utility>-fl-3xl
```

These work with any utility classes that depend on the the spacing configuration, i.e. padding, margin, width, height, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding.

Examples:
```
m-fl-lg
gap-fl-3xs
-space-x-fl-sm
```

Space Value Pairs
Utilities will be generated for any space value pairs. Separate t-shirt sizes with a -. Examples:
```
pt-fl-3xs-2xs // single step
m-fl-sm-lg // sm - lg step
```