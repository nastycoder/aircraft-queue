import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { OfflineComponent } from './offline.component';
import { OnlineComponent } from './online.component';
import { SystemService } from '../services/system.service';
import { Queue } from '../models/queue';

@Component({
    selector: 'aircraft-queue',
    template: `
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [SystemService],
    styles: [`
      :host {
        display: block;
        padding: 0 15px 0 15px;
        border-radius: 15px;
        box-shadow: 0 1px 2px 2px rgba(0,0,0,.2);
        overflow: hidden;
        height: 100%;
      }
    `]
})

@RouteConfig([{
  path: '/offline',
  name: 'Offline',
  component: OfflineComponent,
  useAsDefault: true
},{
  path: '/online/...',
  name: 'Online',
  component: OnlineComponent
},{
  path: '/**',
  redirectTo: ['Offline']
}])

export class AppComponent implements OnInit {

  constructor(private _system: SystemService) {}

  ngOnInit() {
    this._system.addQueue(new Queue('passenger::large', 1));
    this._system.addQueue(new Queue('passenger::small', 2));
    this._system.addQueue(new Queue('cargo::large', 3));
    this._system.addQueue(new Queue('cargo::small', 4));
  }
}
