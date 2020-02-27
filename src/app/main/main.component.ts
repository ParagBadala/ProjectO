import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
    $(".rating").rating({
      maxRating: 5
    });
    $(".rating").rating('disable');
    $('.ui.sticky')
    .sticky({
      context: '#example1'
    });
  }

}
