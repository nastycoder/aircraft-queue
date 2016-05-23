import { Component, OnInit } from 'angular2/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { Aircraft, AIRCRAFT_TYPES, AIRCRAFT_SIZES } from '../models/aircraft';
import { AircraftComponent } from './aircraft.component';

@Component({
    selector: 'options',
    template: `
    <md-list dense>
      <md-list-item *ngFor="#option of options">
        <aircraft [aircraft]="option"
                  draggable="true">
        </aircraft>
      </md-list-item>
    <md-list>
    `,
    styles: [`
      aircraft {
        display: block;
      }
    `],
    directives: [AircraftComponent, MD_LIST_DIRECTIVES]
})

export class OptionsComponent implements OnInit {
  public options: Array<Aircraft> = [];

  ngOnInit() {
    for(let i = 0; i < AIRCRAFT_TYPES.length; i++){
      for(let j = 0; j < AIRCRAFT_SIZES.length; j++){
        this.options.push(<Aircraft>{
          type: AIRCRAFT_TYPES[i],
          size: AIRCRAFT_SIZES[j]
        });
      }
    }
  }
}
