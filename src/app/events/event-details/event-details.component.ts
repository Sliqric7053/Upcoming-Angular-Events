import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
<<<<<<< HEAD
    // subscribe to component param changes and react accordingly
=======
    // subscribe to params changes and react accordingly
>>>>>>> bb22c3dc4cbf11da5c931e622059aeb708dd540c
    this.route.params.forEach((param: Params) => {
      this.event = this.eventService.getEvent(
        +this.route.snapshot.params['id']
      );
      // make sure you maintain app state
<<<<<<< HEAD
      // @TODO: create method e.g. resetState() to reset app state

=======
>>>>>>> bb22c3dc4cbf11da5c931e622059aeb708dd540c
      this.addMode = false;
    });
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  addSession() {
    this.addMode = true;
  }
}
