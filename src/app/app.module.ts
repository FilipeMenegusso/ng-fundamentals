import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventThumbnailComponent } from 'src/app/events/event-thumbnail.component';
import { NavbarComponent } from 'src/app/nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
