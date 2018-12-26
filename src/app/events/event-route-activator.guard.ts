import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './shared/event.service';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
