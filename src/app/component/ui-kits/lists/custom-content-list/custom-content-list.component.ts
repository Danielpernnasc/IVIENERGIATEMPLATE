import { Component } from '@angular/core';
import { customContentData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-custom-content-list',
  templateUrl: './custom-content-list.component.html',
  styleUrls: ['./custom-content-list.component.scss']
})
export class CustomContentListComponent {

  public customContentData = customContentData;
  
}
