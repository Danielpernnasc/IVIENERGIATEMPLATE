import { Component } from '@angular/core';
import { activeListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.scss']
})
export class ActiveListComponent {

  public activeListData = activeListData;
  
}
