import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { EventsListComponent } from './events-list/events-list.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCriteriaComponent,
    EventsListComponent,
    BucketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
