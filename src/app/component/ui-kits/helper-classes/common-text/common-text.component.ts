import { Component, Input } from '@angular/core';
import { commonText } from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-text',
  templateUrl: './common-text.component.html',
  styleUrls: ['./common-text.component.scss']
})
export class CommonTextComponent {

  @Input() data : commonText;

}
