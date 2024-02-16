import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/helper-classes'

@Component({
  selector: 'app-border-colors',
  templateUrl: './border-colors.component.html',
  styleUrls: ['./border-colors.component.scss']
})
export class BorderColorsComponent {

  public borderColorData = Data.borderColor;
}
