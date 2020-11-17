import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() eventRef: any;
  @Output() favoriteEvent = new EventEmitter<Favorite>();
 
  moreInfo=false;
  constructor() {}

  ngOnInit(): void {}

  toggleFavorite=(event:any)=>{
    let favorite:Favorite={
      url:event.url,
      date:event.dates.start.localDate,
      title:event.name,
      id:event.id,
      isFavorite:false,
    };
    this.favoriteEvent.emit(favorite);
    //  console.log(favorite);
  }


}
