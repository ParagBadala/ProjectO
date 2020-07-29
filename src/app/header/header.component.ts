import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEmitter = new EventEmitter()

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
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

  toggleSidebar() {
    console.log('event called')
    this.toggleSidebarEmitter.emit();
  }

}
