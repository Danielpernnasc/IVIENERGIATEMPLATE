import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tab',
  templateUrl: './justify-tab.component.html',
  styleUrls: ['./justify-tab.component.scss']
})
export class JustifyTabComponent {

  active = 2;
  public justifyTabData = Data.justifyTabData;

}
