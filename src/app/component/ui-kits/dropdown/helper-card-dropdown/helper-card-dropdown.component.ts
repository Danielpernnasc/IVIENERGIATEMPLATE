import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-helper-card-dropdown',
  templateUrl: './helper-card-dropdown.component.html',
  styleUrls: ['./helper-card-dropdown.component.scss']
})
export class HelperCardDropdownComponent {

  public helperCardData = Data.helperCardData;
  
}
