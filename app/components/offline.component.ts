import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'offline',
    template: `
      <button>
        <a [routerLink]="['/Online']">Boot</a>
      </button>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
      button {
        background-color: #666;

        a {
          text-decoration: none;
          color: #FFF;
        }
      }
    `]
})

export class OfflineComponent {}
