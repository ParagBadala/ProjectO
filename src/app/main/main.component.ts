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

  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "nextArrow": '<button class="slick-next" style="top: 45%;right: -40px;background-size: 100%;padding: 20px;background: url(../../../assets/nextArrow.svg) no-repeat center"></button>',
    "prevArrow": '<button class="slick-prev" style="top: 45%;left: -40px;background-size: 100%;padding: 20px;background: url(../../../assets/prevArrow.svg) no-repeat center"></button>',
    "dots": false,
    "infinite": false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
    $("._customers_testimonials_user .rating").rating('disable');
    $('.ui.sticky')
    .sticky({
      context: '#example1'
    });
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked')
    // $('._cal .ui.dropdown').dropdown();
    // $("._customers_testimonials_user .rating").rating({
    //   maxRating: 5
    // });
    // $(".rating").rating('disable');
  }


  toggleCal() {
    console.log('toggle called')
    this.showCalculator = !this.showCalculator
  }

}
