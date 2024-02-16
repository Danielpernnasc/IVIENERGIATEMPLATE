import { Component } from '@angular/core';
import { flushListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-flush-list',
  templateUrl: './flush-list.component.html',
  styleUrls: ['./flush-list.component.scss']
})
export class FlushListComponent {

  public flushListData = flushListData;
  
}
