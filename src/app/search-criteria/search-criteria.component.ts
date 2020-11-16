import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  @Output() submitEvent= new EventEmitter<string>();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getSearchTerm=(form:NgForm):void=>{
    // console.log(form)
    this.submitEvent.emit(form.value.searchTerm)
    this.router.navigate(['/events-list'])
  }

}
