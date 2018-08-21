import { Component, ChangeDetectionStrategy } from '@angular/core';
import { frameworks } from './../../shared/framework.store';

@Component({
  selector: 'app-new-framework',
  templateUrl: './new-framework.component.html',
  styleUrls: ['./new-framework.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewFrameworkComponent {
  private newItem = '';
  private frameworks = frameworks;

  constructor() { }

  addNew() {
    this.frameworks.addNew(this.newItem);
    this.newItem = '';
  }

}
