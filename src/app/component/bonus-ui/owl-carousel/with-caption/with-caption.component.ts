import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-with-caption',
  templateUrl: './with-caption.component.html',
  styleUrls: ['./with-caption.component.scss']
})
export class WithCaptionComponent {

  public withIndicatorOptions = Data.withIndicatorOptions;
  public withCaptionData = Data.withCaptionData;
}
