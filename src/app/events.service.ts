import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from './favorite';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventBaseUrl:string='https://app.ticketmaster.com/discovery/v2/'
  key:string='jGarcrXM4Z2Btog36xqijTCYxLX557MR'
  favorites:Favorite[]=[];
  constructor(private http:HttpClient) { }

  getEvents=(searchTerm:string)=>{
    return this.http.get(this.eventBaseUrl, {
      params:{
        apikey:this.key,
        keyword: searchTerm,
      }
    });
  };
}
