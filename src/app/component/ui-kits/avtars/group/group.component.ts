import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/avtars'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  public groupData = Data.groupingData;
  
}
