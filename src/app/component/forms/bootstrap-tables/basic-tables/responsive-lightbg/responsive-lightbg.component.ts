import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table'

@Component({
  selector: 'app-responsive-lightbg',
  templateUrl: './responsive-lightbg.component.html',
  styleUrls: ['./responsive-lightbg.component.scss']
})
export class ResponsiveLightbgComponent {

  public responsiveLightBgData = Data.responsiveLightBgData;
  
}
