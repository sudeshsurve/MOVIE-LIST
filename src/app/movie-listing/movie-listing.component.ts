import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {
  data :any = []
  poster : any 

  ratting : string =""

  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://demo.tech2edge.co/samples/data-sg')
    .subscribe((res:any)=>{
      this.data = res
      this.poster = res.series
      // console.log(this.data.characters[0].img);
      console.log(this.data);
      
    })
  }

}
