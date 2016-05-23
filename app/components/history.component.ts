import { Component, OnInit } from 'angular2/core';

import { AircraftComponent } from './aircraft.component';

import { Aircraft } from '../models/aircraft';
import { SystemService } from '../services/system.service';

@Component({
    selector: 'history',
    template: `
    <h2>History</h2>
    <aircraft *ngFor="#aircraft of history"
              [aircraft]="aircraft">
    </aircraft>
    `,
    directives: [AircraftComponent]
})

export class HistoryComponent implements OnInit {
  public history: Aircraft[];

  constructor(private _system: SystemService) {}

  ngOnInit() {
    this.history = this._system.history;
  }
}
