import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/typography'

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.scss']
})
export class TextColorComponent {

  public textColorData = Data.textColorData;

}
