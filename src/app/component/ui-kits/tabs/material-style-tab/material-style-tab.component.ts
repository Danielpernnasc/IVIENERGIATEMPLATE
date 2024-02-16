import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tab';

@Component({
  selector: 'app-material-style-tab',
  templateUrl: './material-style-tab.component.html',
  styleUrls: ['./material-style-tab.component.scss']
})
export class MaterialStyleTabComponent {
  active = 1;

  public userDetailsData = Data.userDetailsData;
  public descriptionData = Data.descriptionData;
  public reviewData = Data.reviewData;

}
