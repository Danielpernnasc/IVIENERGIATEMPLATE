import { Component } from '@angular/core';
import { scrollableListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.component.html',
  styleUrls: ['./scrollable-list.component.scss']
})
export class ScrollableListComponent {

  public scrollableListData = scrollableListData;
}
