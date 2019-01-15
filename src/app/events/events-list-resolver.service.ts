import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}
  // resolver auto-subscribes
  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents();
  }
}
