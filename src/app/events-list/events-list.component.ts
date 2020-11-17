import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  eventData: any = null;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let queryParams = response;
      this.eventsService
        .getEvents(queryParams.get('term'))
        .subscribe((response) => {
          console.log(response);
          this.eventData = response;
        });
    });
  }
}
