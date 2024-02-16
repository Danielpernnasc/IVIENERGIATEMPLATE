import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-with-indicator',
  templateUrl: './with-indicator.component.html',
  styleUrls: ['./with-indicator.component.scss']
})
export class WithIndicatorComponent {

  public withIndicatorOptions = Data.withIndicatorOptions;
  public withIndicatorData = Data.withIndicatorData;

}
