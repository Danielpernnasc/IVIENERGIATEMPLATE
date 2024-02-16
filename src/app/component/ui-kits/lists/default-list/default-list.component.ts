import { Component } from '@angular/core';
import { defaultListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.scss']
})
export class DefaultListComponent {

  public defaultListData = defaultListData;
}
