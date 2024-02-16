import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-content-dropdown',
  templateUrl: './justify-content-dropdown.component.html',
  styleUrls: ['./justify-content-dropdown.component.scss']
})
export class JustifyContentDropdownComponent {

  public justifyDropdownData = Data.justifyDropdownData;

}
