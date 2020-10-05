import { Component, OnInit, AfterViewInit, OnChanges, AfterViewChecked } from '@angular/core';
import { CommonService } from '../common.service';
import {Email} from '../../assets/js/smtp.js';

// declare var Email : any;

declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  public showCalculator = false;

  public slides = [342, 453, 846, 855, 234, 564, 744, 243];

  public slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "nextArrow": '<button class="slick-next" style="top: 45%;right: -40px;background-size: 100%;padding: 20px;background: url(./assets/nextArrow.svg) no-repeat center"></button>',
    "prevArrow": '<button class="slick-prev" style="top: 45%;left: -40px;background-size: 100%;padding: 20px;background: url(./assets/prevArrow.svg) no-repeat center"></button>',
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

  public info = {
    firstName: null,
    lastName: null,
    phoneNo: null,
    email: null,
    comment: null
  }

  constructor(private commonService: CommonService) {}

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
    $('.ui.modal').modal();
  }

  toggleCal($element) {
    console.log('toggle called')
    this.showCalculator = !this.showCalculator;
    // window. scrollTo(0, 0);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  proceedForInfo() {
    $('.ui.modal._completeOrder')
    .modal('setting', 'transition', 'scale')
    .modal('show');
  }

  completeOrder() {
    $('.ui.modal._completeOrder')
    .modal('setting', 'transition', 'scale')
    .modal('hide');
  }

  public confirmationOrder() {
    $('.ui.modal._confirmationOrder')
    .modal({centered:true})
    .modal('setting', 'transition', 'scale')
    .modal('show');
  }

  placeOrder() {
    /**
     * sourcetoken: 794c463d-17d2-48ee-91ca-2504e5faaa90
     * password: - D404BF1298A69F416288F60C797E2CE24996
     */
    this.completeOrder();
    this.confirmationOrder();
    console.log(this.info);
    return;
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'panny10badala@gmail.com',
      Password : 'D404BF1298A69F416288F60C797E2CE24996',
      To : 'panny10badala@gmail.com',
      From : 'panny10badala@gmail.com',
      Subject : `Meritmates Order - From ${this.info.email}`,
      Body : `
             <h4>Order Information</h4>
             <p><strong>Type of Service:<strong> Academic paper writing</p>
             <p><strong>Type of paper:<strong> Essay</p>
             <p><strong>Number of Pages/Words:<strong> 1000</p>
             <p><strong>Academic Level:<strong> GCSE/ A Level</p>
             <p><strong>Urgency:<strong> 14 Days</p>
             <p><strong>Total Price:<strong> $101.62</p><br />
             <h4>Personal Information</h4>
             <p><strong>First Name : </strong> ${this.info.firstName}</p>
             <p><strong>Last Name : </strong>${this.info.lastName}</p>
             <p><strong>Phone No. :</strong>${this.info.phoneNo}</p>
             <p><strong>Email : </strong>${this.info.email}</p>
             <p><strong>Comment : </strong>${this.info.comment}</p>
      `
      }).then( message => {
        this.completeOrder();
        this.confirmationOrder();
        });
  }

  public isOrderDetailFilled() {
    console.log(this.info.firstName && this.info.lastName && this.info.phoneNo && this.info.email)
    return this.info.firstName && this.info.lastName && this.info.phoneNo && this.info.email
  }

}
