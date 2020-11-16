import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  eventData:any
  constructor( private eventsService:EventsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let queryParams = response;
        this.eventsService
          .getEvents(queryParams.get('term'))
          .subscribe((response) => {
            // console.log(response);
            this.eventData = response;
          });
    });
  }

  search=(term:string)=>{
    this.router.navigate(['/events-list'], {
      queryParams:{
        term:term,
      }
    });
  };

}
