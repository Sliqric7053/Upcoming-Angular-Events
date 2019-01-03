import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  @Output() emitClick = new EventEmitter();
  text = 'local/template var binding';

  constructor() {}

  ngOnInit() {}

  clickEvent() {
    this.emitClick.emit(this.event);
  }

  getStartTimeClass() {
    // [ngClass] expects a returned object OR string or array of strings

    // option 1
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return { green: isEarlyStart, bold: isEarlyStart };

    // option 2
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return '';

    // option 3
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}
