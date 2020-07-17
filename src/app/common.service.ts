import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  toggleCal: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  setToggleCal(acc) {
    this.toggleCal.next(acc)
  }
  getToggleCal() {
    return this.toggleCal.asObservable()
  }

}
