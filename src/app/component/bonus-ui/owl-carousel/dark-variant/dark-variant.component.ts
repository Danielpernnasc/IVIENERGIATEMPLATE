import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-dark-variant',
  templateUrl: './dark-variant.component.html',
  styleUrls: ['./dark-variant.component.scss']
})
export class DarkVariantComponent {

  public darkVariantData = Data.darkVariantData;
  public withIndicatorOptions = Data.withIndicatorOptions;
  
}
