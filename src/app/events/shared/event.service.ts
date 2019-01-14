import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from './http.util';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>('/api/events')
      .pipe(catchError(handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(handleError<IEvent>('getEvent')));
  }

  searchSessions(searchTerm: Observable<ISession[]>) {
    return this.http
      .get<ISession[]>(`/api/sessions/search?search=${searchTerm}`)
      .pipe(catchError(handleError<ISession[]>('getEvent')));
  }

  saveEvent(event: IEvent) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<IEvent>(`/api/events/`, event, options)
      .pipe(catchError(handleError<IEvent>('saveEvent')));
  }
}
