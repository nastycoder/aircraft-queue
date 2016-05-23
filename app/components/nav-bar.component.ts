import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'nav-bar',
    template: `
    <nav>
      <a [routerLink]="['OnlineQueue']">Active</a>
      <a [routerLink]="['OnlineHistory']">History</a>
    </nav>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
      :host {
        display: block;
        margin: 15px 0 15px 0;
        border-bottom: 1px solid;
        padding-left: 10px;
        height: 21px;
      }

      a {
        text-decoration: none;
        color: black !important;
        border: 1px solid;
        border-radius: 5px 5px 0 0 ;
        padding: 3px;
      }

      a.router-link-active {
        border-bottom-color: white;
      }
    `]
})

export class NavBarComponent {}
