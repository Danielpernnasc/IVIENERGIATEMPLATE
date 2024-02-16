import { Component, Input } from '@angular/core';
import { commonHelperClasses } from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-helper-classes',
  templateUrl: './common-helper-classes.component.html',
  styleUrls: ['./common-helper-classes.component.scss']
})
export class CommonHelperClassesComponent {

  @Input() data : commonHelperClasses;

}
