import { Component, ChangeDetectionStrategy } from '@angular/core';
import { frameworks } from './../../shared/framework.store';

@Component({
  selector: 'app-selected-frameworks',
  templateUrl: './selected-frameworks.component.html',
  styleUrls: ['./selected-frameworks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedFrameworksComponent {
  private frameworks = frameworks;
  constructor() {
  }
}
