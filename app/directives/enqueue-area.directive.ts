import { Directive } from 'angular2/core';

import { Aircraft } from '../models/aircraft';
import { SystemService } from '../services/system.service';

@Directive({
  selector: '[enqueue-area]',
  host: {
    '[class.accept-drop]': 'addClass',
    '(drop)': 'ondrop($event)',
    '(dragenter)': 'ondragenter($event)',
    '(dragover)': 'ondragover($event)',
    '(dragleave)': 'ondragleave()'
  }
})

export class EnqueueAreaDirective {
  public addClass = false;

  constructor(private _system: SystemService) {}

  ondrop($event) {
    this.addClass = false;
    this._system.enqueue(new Aircraft($event.dataTransfer.getData('aircraft/type'),
                                      $event.dataTransfer.getData('aircraft/size')));
  }

  ondragover($event) {
    if (!~$event.dataTransfer.types.indexOf('aircraft/type') ||
        !~$event.dataTransfer.types.indexOf('aircraft/size')) {
       return;
    }
    $event.preventDefault();
    $event.stopPropagation();
    $event.dataTransfer.dropEffect = 'copy';
    this.addClass = true;
  }

  ondragenter($event) {
    if (!$event.dataTransfer.getData('aircraft/type') ||
        !$event.dataTransfer.getData('aircraft/size')) {
      return;
    }
    this.addClass = true;
  }

  ondragleave() {
    this.addClass = false;
  }
}
