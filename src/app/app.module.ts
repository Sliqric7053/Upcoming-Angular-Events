import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'core-js/es7/reflect';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  SessionListComponent,
  CreateSessionComponent,
  UpvoteComponent,
  EventsListResolverService,
  EventResolverService,
  EventService,
  VoterService,
  LocationValidator,
} from './events/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ErrorsComponent } from './errors/errors.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ToastrService,
  CollapsibleWellComponent,
  JQ_TOKEN,
  ModalTriggerDirective,
  SimpleModalComponent,
} from './common/index';
import { DurationPipe } from './events/shared/duration.pipe';

const jQuery = window['$'];

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
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    ToastrService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventsListResolverService,
    EventResolverService,
    AuthService,
    VoterService,
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
