import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ui-kits/avtars'

@Component({
  selector: 'app-avtars',
  templateUrl: './avtars.component.html',
  styleUrls: ['./avtars.component.scss']
})
export class AvtarsComponent {

  public sizingData = Data.sizesAvtarData;
  public statusIndicatorData = Data.statusIndicatorData;
  public shapeData = Data.shapeData;
  public ratioData = Data.ratioData;

}
