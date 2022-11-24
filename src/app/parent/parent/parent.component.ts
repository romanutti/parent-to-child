import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  private state = new BehaviorSubject({
    enabled: false,
  });
  public eventStream$ = this.state.asObservable();

  constructor() {}

  ngOnInit() {}

  update() {
    let state = this.state.value;
    state.enabled = !state.enabled;

    this.state.next(state);
  }
}
