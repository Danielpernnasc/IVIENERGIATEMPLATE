import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-play',
  templateUrl: './auto-play.component.html',
  styleUrls: ['./auto-play.component.scss']
})
export class AutoPlayComponent {

  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;

  
}
