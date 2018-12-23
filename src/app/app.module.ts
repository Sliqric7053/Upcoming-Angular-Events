import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'core-js/es7/reflect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    NavComponent,
    EventsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
