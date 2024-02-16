import { Component } from '@angular/core';
import { horizontialListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-horizontial-list',
  templateUrl: './horizontial-list.component.html',
  styleUrls: ['./horizontial-list.component.scss']
})
export class HorizontialListComponent {

  public horizontialListData = horizontialListData;
}
