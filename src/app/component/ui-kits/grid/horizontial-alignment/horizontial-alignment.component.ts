import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid'

@Component({
  selector: 'app-horizontial-alignment',
  templateUrl: './horizontial-alignment.component.html',
  styleUrls: ['./horizontial-alignment.component.scss']
})
export class HorizontialAlignmentComponent {

  public horizontialAlinmentData = Data.alignmentData;
  
}
