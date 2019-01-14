import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {}

  ngOnInit() {}

  searchSessions(searchTerm: Observable<ISession[]>) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
