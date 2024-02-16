import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ui-kits/helper-classes'

@Component({
  selector: 'app-helper-classes',
  templateUrl: './helper-classes.component.html',
  styleUrls: ['./helper-classes.component.scss']
})
export class HelperClassesComponent {

  public commonHelperData = Data.BorderAndDisplayData;
  public styleBorderData = Data.StyleBorderData;
  public backgroundColorsData = Data.backgroundColorsData;
  public fontWeightData = Data.FontWeightData;
  public textColorData = Data.textColorData;

}
