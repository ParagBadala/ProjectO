import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { essayServiceContent } from '../content/essayService';
import { DissertationServiceContent } from '../content/dissertationService';
import { AssignmentServiceContent } from '../content/assignmentService';
import { AdmissionServiceContent } from '../content/admissionService'
import { courseServiceContent } from '../content/courseworkService'
import { CvServiceContent } from '../content/cvService'
import { copyWritingServiceContent } from '../content/copyWritingService'
import { editingServiceContent } from '../content/editingService'
import { proofreadingServiceContent } from '../content/proofReadingService'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public content;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((routeInfo) => {
      if(routeInfo.service == 'essay') {
        this.content = essayServiceContent[0];
      } else if(routeInfo.service == 'disseration') {
        this.content = DissertationServiceContent[0];
      } else if(routeInfo.service == 'assignment') {
        this.content = AssignmentServiceContent[0]
      }else if(routeInfo.service == 'admission') {
        this.content = AdmissionServiceContent[0]
      }else if(routeInfo.service == 'courseWork') {
        this.content = courseServiceContent[0]
      }else if(routeInfo.service == 'cv') {
        this.content = CvServiceContent[0]
      }else if(routeInfo.service == 'copywriting') {
        this.content = copyWritingServiceContent[0]
      }else if(routeInfo.service == 'editing') {
        this.content = editingServiceContent[0]
      }else if(routeInfo.service == 'proofreading') {
        this.content = proofreadingServiceContent[0]
      }
      this.onActivate();
    })
  }

  onActivate() {
    // let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 20); // how far to scroll on each step
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // }, 16);
}

}
