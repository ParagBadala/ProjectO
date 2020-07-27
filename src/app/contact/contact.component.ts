import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact } from '../content/contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public content;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((routeInfo) => {
      this.content = contact[0]
      console.log(this.content)
    })
  }

}
