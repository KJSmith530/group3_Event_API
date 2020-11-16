import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: BucketListComponent },
  { path: 'event-list', component: EventsListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
