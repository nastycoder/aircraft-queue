import { Component, OnInit } from 'angular2/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'

import { AircraftComponent } from './aircraft.component';
import { EnqueueAreaDirective } from '../directives/enqueue-area.directive';

import { Queue } from '../models/queue';
import { SystemService } from '../services/system.service';

@Component({
    selector: 'queue',
    template: `
    <button (click)="dequeue()">Dequeue</button>
    <md-list class="scroll">
      <div *ngFor="#queue of queues">
        <md-list-item *ngFor="#aircraft of queue">
          <aircraft [aircraft]=aircraft>
          </aircraft>
        </md-list-item>
      </div>
    </md-list>
    `,
    directives: [EnqueueAreaDirective, AircraftComponent, MD_LIST_DIRECTIVES],
    styles: [`
      :host {
        overflow: hidden;
        min-height: 200px;
      }
      .scroll {
        overflow-y: auto;
      }
    `]
})

export class QueueComponent implements OnInit{
  public queues: Queue[];
  constructor(private _system: SystemService) {}

  ngOnInit(){
    this.queues = this._system.queues;
  }

  public dequeue(): void {
    this._system.dequeue();
  }
}
