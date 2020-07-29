import { Component, OnInit, AfterViewInit, OnChanges, AfterViewChecked } from '@angular/core';
import { CommonService } from '../common.service';

declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, AfterViewChecked {

  public showCalculator = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getToggleCal().subscribe((data) => {
      this.showCalculator = !this.showCalculator
    })
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    $('._cal .ui.dropdown').dropdown();
    $(".rating").rating({
      maxRating: 5
    });
    $(".rating").rating('disable');
    $('.ui.sticky')
    .sticky({
      context: '#example1'
    });
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
    $('._cal .ui.dropdown').dropdown();
  }


  toggleCal() {
    console.log('toggle called')
    this.showCalculator = !this.showCalculator
  }

}
