import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  private enabled = new BehaviorSubject<Boolean>(true);
  public eventStream$ = this.enabled.asObservable();

  constructor() {}

  ngOnInit() {}

  update() {
    this.enabled.next(!this.enabled.value);
  }
}
