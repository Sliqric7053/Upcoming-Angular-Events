import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/http.util';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor(private http: HttpClient) {}

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => {
      return voter !== voterName;
    });

    this.http
      .delete(
        `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
      )
      .pipe(catchError(handleError<ISession>('addVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post<ISession>(
        `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`,
        {},
        options
      )
      .pipe(catchError(handleError<ISession>('addVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    // return session.voters.some(voter => {
    //   return voter === voterName;
    // });
    return session.voters.includes(voterName);
  }
}
