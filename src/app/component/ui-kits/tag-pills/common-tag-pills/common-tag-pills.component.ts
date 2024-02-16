import { Component, Input } from '@angular/core';
import { commonTagPills } from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-common-tag-pills',
  templateUrl: './common-tag-pills.component.html',
  styleUrls: ['./common-tag-pills.component.scss']
})
export class CommonTagPillsComponent {

  @Input() data : commonTagPills;

}
