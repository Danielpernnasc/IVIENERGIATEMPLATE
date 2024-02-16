import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/helper-classes'

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent {

  public fontSizeData = Data.fontSizeData;
  
}
