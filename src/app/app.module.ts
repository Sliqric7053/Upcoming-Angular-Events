import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'core-js/es7/reflect';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  SessionListComponent,
  CreateSessionComponent,
  EventRouteActivatorGuard,
  EventsListResolverService,
  EventService,
} from './events/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import { ErrorsComponent } from './errors/errors.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    NavComponent,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorGuard,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventsListResolverService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (!component.isDirty) {
    return window.confirm(
      'You have not saved event, sure you want to navigate away?'
    );
  }
  return true;
}
