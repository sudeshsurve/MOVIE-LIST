import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { characters, series } from '../data-type';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {
  data :characters[] =[]
  poster : any  ={}
  ratting : string =""

  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://demo.tech2edge.co/samples/data-sg')
    .subscribe((res:characters | series | any)=>{
      this.data = res.characters
      this.poster = res.series
      // console.log(res);
    })
  }

}
