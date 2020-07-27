import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;

import { review } from '../content/review'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, AfterViewInit {

  public content;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((routeInfo) => {
      this.content = review[0]
      console.log(this.content)
    })
  }

  ngAfterViewInit() {
    $('.ui.rating')
    .rating({
      initialRating: 3,
      maxRating: 5,
    }).rating('disable')
  ;
  }

}
