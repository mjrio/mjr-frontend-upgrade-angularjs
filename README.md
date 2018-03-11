# mjr-upgrade-angularjs

This repository shows a migration path from plain old AngularJS (scripts & bower) to

*   AngularJS in ES6
*   AngularJS in ES6 + VueJS
*   AngularJS in Typescript
*   AngularJS in Typescript + Angular (with @angular/upgrade)

WebPack is used to bundle the JavaScript.

> Orginal code examples adapted from :
> https://github.com/pranavkotecha88/F1-feeder/

## Hybrid apps are hard

A hybrid, combining AngularJS & Angular or Vuejs, into a single app is possible but requires good knowledge of both frameworks. If you just starting to learn the new framework you will have a hard time ahead of you.

*   You need knowledge of the internals of both frameworks. How are they conflicting and how are they working together.
*   When thing go wrong it's not always clear where the problem is located. You get a mix of AngularJS and Angular/VueJS errors. This can lead to confusion.
*   You will have double implementations of some services or utilities. For example you can't re-use a pipe (or filter) in AngularJS vs Angular. You will have to maintain them both.
*   If the couping of components is so high that changes to a single component cannot be isolated from other components it will be hard to migrate without a big re-write.
*   There is litte, no and incorrect documentation/support available to make the two frameworks work together. Your have to figure it out yourself.

### Consider

*   To re-write the app completely. He, you can still re-use the following

    *   Html templates
    *   Styling (CSS)
    *   Rest API
    *   Functional requirement
    *   (optional) Universal javascript code
    *   (optional) Build and continious integration
    *   (optional) Deployment

*   To split your app in multiple smaller apps and create the new app's in the new framework

    *   Share data between apps via session/local storage and/or cookies.

*   How long are your going to support the old framework? Be carefull that your don't keep the old framework forever.
*   Which team will do the migration? Developers usually prefer to work on green field projects. You should take that into account when planning who will maintain the legacy version and who will work on the new one.

### Keep your AngularJS

And finally consider to maybe not to migrate at all. AngularJS will still be supported for a [long time](https://blog.angular.io/stable-angularjs-and-long-term-support-7e077635ee9c). You can modernize your developer setup (webpack, typescript, npm, components, etc) but keep AngularJS for your exiting application.

## He, I want to migrate. Which steps should I take?

If you still want to have an incremental migration these are the steps to take.

*   Stop with bower
*   Start with npm & webpack
*   Avoid gulp/grunt in favor of npm scripts
*   Upgrade to the latest version of AngularJS
*   Migrate script tags to ESM ([ES Modules](http://2ality.com/2014/09/es6-modules-final.html))

    *   Create ES Modules
    *   No more IIFE and 'use strict'
    *   Use Import/Export
    *   Use Javascript bundler (Webpack)

*   Migrate your javascript (improve your code)

    *   Prefer ES6+ language features
    *   Prefer to write universal javascript (platform independent)
    *   Prefer to follow the [AngularJS Styleguide](https://github.com/johnpapa/angular-styleguide)
    *   Prefer to follow a JavaScript styleguide ([AirBnb](https://github.com/airbnb/javascript), [Standard](https://standardjs.com/), ...)
    *   Prefer AngularJS components (AngularJS v1.5+)
    *   Prefer Linter (Eslint) & code formatter (Prettier)

*   Migrate to Typescript (optional for VueJS)

*   Migrate to @Angular/CLI

    *   Start with a standard AngularCLI
    *   Add/cleanup your favor test setup (Jest, Karma, E2E)
    *   Add @angular/upgrade
    *   Add AnguarJS and move the old app into the new files structure
    *   Separate common code (services, filters)

-   Or Migrate to @vue/cli

    *   Start with a standard VueCLI
    *   Add NgVue
    *   Add AnguarJS and move the old app into the new files structure
    *   Separate common code (services, filters)

-   Prefer to separate your AngularJS and VueJS/Angular code as much as possible. The router is a good base to make this separation.
-   Prefer to write framework independent code. This code can be shared by both frameworks
-   Write new feature in the new framework
-   When an AngularJS feature changes, re-write it in the new framework
-   When all is migrated to remove AngularJS completely

## Angular or VueJS

When considering Angular or VueJS here some point to take into account:

*   Both frameworks are here to stay.
*   Performance is not the issue anymore.
*   Good support and documentation is available for both.
*   Many open source and commercial libraries available for both
*   Angular is more complete and powerfull but has added complexity:

    *   It's an opinionated framework: the Angular way
    *   Higher learning curve
    *   Typescript and typing
    *   RXJS and the world of observables
    *   Complex/slower bundeling and AOT compilation
    *   Dependency Injection
    *   Less univeral javascript code
    *   Change detection and zones is hard.
    *   ES Modules vs Angular modules

*   VueJS is easy to start with:
    *   Simple learning curve
    *   More pure javascript code
    *   More freedom to choose:
        *   ES5 vs ES6 vs TypeScript
        *   Callbacks, promises or observables
        *   Fetch, Axios, custom http service
    *   Easy out of the box support for flux pattern (vuex)
    *   Can be used without webpack and runs with ES5
    *   Simple change tracking
    *   No dependency injection
    *   Lightweight (smaller bundles, faster dev cycle).
    *   Faster and easier to unit test

Bundle Sizes/ Build time (prod)

|            | AngularJS | Angular | VueJS |
| ---------- | --------- | ------- | ----- |
| Size       | 200k      | 620k    | 334k  |
| Build Time | 7sec      | 27sec   | 16sec |
| Serve      | 7sec      | 17sec   | 8sec  |

Different but equal (template syntax)

| Angular                        | VueJS                         | AngularJS                     |
| ------------------------------ | ----------------------------- | ----------------------------- |
| [attr]="value"                 | :attr="value"                 | n/a                           |
| (click)="onClick()"            | @click="onClick()"            | ng-click="onClick()"          |
| (mousemove)="onMove()"         | @mousemove="onMove()"         | n/a                           |
| {{name}}                       | {{name}}                      | {{name}}                      |
| [innerHtml]="rawHtml"          | v-html="rawHtml"              | ng-bind-html="rawHtml"        |
| \*ngFor="let item of items"    | v-for="item in items"         | ng-repeat="item in items"     |
| \*ngIf="condition"             | v-if="condition"              | ng-if="condition"             |
| [hidden]="!condition"          | v-show="condition"            | ng-show="condition"           |
| {{ message &#124; uppercase }} | {{ message &#124; uppercase}} | {{ message &#124; uppercase}} |
| {{ msg &#124; upper:5 }}       | {{ msg &#124; upper(5)}}      | {{ msg &#124; upper:5}}       |
| ([ngModel])="name"             | v-model="name"                | ng-model="name"               |

## Resources

### Consider VueJS, Angular or React

*   [John Papa: A Look at Angular Alongside Vue - File Structure](https://johnpapa.net/a-look-at-angular-alongside-vue-1/)
*   [The State of JavaScript 2017](https://stateofjs.com/)
*   [Angular vs. React vs. Vue: A 2017 comparison](https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176)

### Libraries

*   [LogLevel - Logger](https://github.com/pimterry/loglevel)
*   [Axios - Http Client](https://github.com/axios/axios)
*   [ngVue](https://github.com/ngVue/ngVue)

### AngularJS to Angular

*   [GitHub - raymer/angularHybrid: Hybrid AngularJS/Angular4 application with WebPack](https://github.com/raymer/angularHybrid)
*   [Youtube - From Controllers to Components: Migrating to Angular 2](https://www.youtube.com/watch?v=e-zi9QJ1ynY)
*   [GitHub - Demonstrating how to upgrade/migrate Angular 1 apps to Angular 2](github.com/craigshoemaker/angular-upgrade-demo)
*   [Converting an AngularJS 1.5 app to Angular 4](https://medium.com/@satsukitv/converting-an-angularjs-1-5-app-to-angular-4-4b10c6cb8672)
*   [Pluralsight - Preparing for Migration from AngularJS (1.x) to Angular (2+)](https://app.pluralsight.com/library/courses/migrating-applications-angular-2)

### AngularJS to VueJS

*   [GitHub - Use Vue2 components in Angular 1.x - NgVue](https://github.com/ngVue/ngVue)
*   [GitHub - Sample project to show how to use Vue 2.0 components within AngularJS app](https://github.com/nicolaspayot/todo-ngVue)
*   [How to Migrate from AngularJS to Vue – DailyJS – Medium](https://medium.com/dailyjs/how-to-migrate-from-angularjs-to-vue-4a1e9721bea8)
*   [Why and How We Migrated from AngularJS to VueJS](https://blog.holistics.io/why-and-how-we-migrated-from-angularjs-to-vuejs/)
*   [Migrating to VueJS — Another way – Lucas Katayama](https://medium.lucaskatayama.com/migrating-to-vuejs-389745001c11)
*   [How to embed Vue.js & Vuex inside an AngularJS app… wait what? - Cushion](https://cushionapp.com/journal/vuejs-inside-angularjs)
*   [Progressively migrating from AngularJS to Vue.js at Unbabel](https://medium.com/unbabel-dev/progressively-migrating-from-angularjs-to-vue-js-at-unbabel-581eb4ae022d)
