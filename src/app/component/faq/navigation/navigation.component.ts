import { Component } from '@angular/core';
import { navigationData1, navigationData2 } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navigationData1 = navigationData1;
  public navigationData2 = navigationData2;


}
