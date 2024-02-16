import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignment-dropdown',
  templateUrl: './alignment-dropdown.component.html',
  styleUrls: ['./alignment-dropdown.component.scss']
})
export class AlignmentDropdownComponent {

  public alignmentDropdownData = Data.alignmentDropdownData;
  
}
