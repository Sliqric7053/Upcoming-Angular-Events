import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

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

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
