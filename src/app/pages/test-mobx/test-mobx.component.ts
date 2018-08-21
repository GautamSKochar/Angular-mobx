import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { frameworks } from '../../shared/framework.store';

@Component({
  selector: 'app-test-mobx',
  templateUrl: './test-mobx.component.html',
  styleUrls: ['./test-mobx.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestMobxComponent implements OnInit {

  private frameworks = frameworks;
  constructor() { 

  }

  ngOnInit() {
  }

  setValue() {
  }
}
