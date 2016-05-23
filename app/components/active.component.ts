import { Component } from 'angular2/core';

import { EnqueueAreaDirective } from '../directives/enqueue-area.directive';
import { OptionsComponent } from './options.component';
import { QueueComponent } from './queue.component';

@Component({
    selector: 'active',
    template: `
    <h2>Active</h2>
    <div class="wrapper">
      <options class="fill-half"></options>
      <queue class="fill-half" enqueue-area></queue>
    </div>
    `,
    directives: [OptionsComponent, QueueComponent, EnqueueAreaDirective],
    styles: [`
      :host {
        height: 100%;
        overflow: hidden;
      }
      .wrapper {
        display: flex;
        flex-flow: row wrap
      }
      .fill-half {
        width: 50%;
        min-width: 225px;
        display: block;
      }
    `]
})

export class ActiveComponent {}
