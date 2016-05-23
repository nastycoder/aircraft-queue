import { Component, Input } from 'angular2/core';

import { Aircraft } from '../models/aircraft';

@Component({
    selector: 'aircraft',
    template: `
    <div class="aircraft"
         title="{{ aircraft.type + ' ' + aircraft.size}}">
      <div class="attribute">
        {{ aircraft.type }}
      </div>
      <div class="attribute">
        {{ aircraft.size }}
      </div>
      <div class="attribute">
        {{ aircraft.lastModified | date:'Hmmss' }}
      </div>
    </div>
    `,
    host: {
      '(dragstart)': 'ondragstart($event)'
    },
    styles: [`
      .aircraft {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
      }

      .attribute {
        padding-left: 5px;
      }
    `]
})



export class AircraftComponent {
  @Input() aircraft: Aircraft;

  ondragstart($event) {
    $event.stopPropagation();
    $event.dataTransfer.setData('aircraft/type', this.aircraft.type);
    $event.dataTransfer.setData('aircraft/size', this.aircraft.size);
  }
}
