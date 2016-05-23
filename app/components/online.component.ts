import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import { NavBarComponent } from './nav-bar.component';
import { ActiveComponent } from './active.component';
import { HistoryComponent } from './history.component';

@Component({
    selector: 'online',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
    directives: [NavBarComponent, RouterOutlet]
})

@RouteConfig([{
  name: 'OnlineQueue',
  path: '/',
  component: ActiveComponent,
  useAsDefault: true
},{
  name: 'OnlineHistory',
  path: '/history',
  component: HistoryComponent
}])

export class OnlineComponent {}
