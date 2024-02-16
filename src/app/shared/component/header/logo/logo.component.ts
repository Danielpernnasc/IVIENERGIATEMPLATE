import { Component } from '@angular/core';
import { NavService } from '../../../../shared/services/nav.service';
import { VerticalNavService } from '../../../../shared/services/vertical-nav.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor(public navService: VerticalNavService, public navServices : NavService) { }

  openMenu() {
    this.navService.isDisplay = !this.navService.isDisplay;
  }
}
