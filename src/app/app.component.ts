import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';


declare var $: any ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ProjectO';

  constructor(private router: Router, private commonService: CommonService){}
    
  ngOnInit() {
    AOS.init({
      once: false,
      mirror: true,
      duration: 1300,
      offset: 100
    });
  }

  ngAfterViewInit() {
    $('.ui.dropdown')
    .dropdown()
  ;
  }

  onActivate(event) {
    // console.log('scroll called')
    // let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 20); // how far to scroll on each step
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // }, 16);
  }

  navigate(path,param?) {
    if(param) {
      this.router.navigate([path,param])
    } else {
      this.router.navigate([path])
    }
  }

  toggleCal() {
    this.commonService.setToggleCal(true);
  }

  toggleSidebar(e) {
    console.log('event received')
    $('.ui.sidebar')
  .sidebar('toggle')
;
  }
}
