import { Injectable } from 'angular2/core';

import { Queue } from '../models/queue';
import { Aircraft } from '../models/aircraft';

@Injectable()

export class SystemService {
  private _queues: Queue[] = [];
  public history: Aircraft[] = [];

  public addQueue(queue: Queue): void {
    this._queues.push(queue);
    this._queues.sort( (a: Queue, b: Queue) => a.prioity - b.prioity );
  };

  public dequeue(): Aircraft {
    for (let i = 0 ; i < this._queues.length; i++){
      if (!this._queues[i].length){
        continue;
      }
      let aircraft: Aircraft = this._queues[i].shift();
      aircraft.touch();
      this.history.push(aircraft);
      return aircraft;
    }
  };

  public enqueue(aircraft: Aircraft): void {
    let queue: Queue;

    queue = this._queues.filter( (q: Queue) => q.id === aircraft.queueId ).pop();

    if (!queue){
      new Error('No queue setup for provided Aircraft properties.');
    }

    queue.push(aircraft);
  };

  get queues(): Queue[] {
    return this._queues;
  }
}
