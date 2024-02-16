import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-badge-button',
  templateUrl: './badge-button.component.html',
  styleUrls: ['./badge-button.component.scss']
})
export class BadgeButtonComponent {

  public badgeButtonData = Data.badgeButtonData;

}
