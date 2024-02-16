import { Component, Input } from '@angular/core';
import { progresBar } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-common-progress-bar',
  templateUrl: './common-progress-bar.component.html',
  styleUrls: ['./common-progress-bar.component.scss']
})
export class CommonProgressBarComponent {

  @Input() data : progresBar;
}
