import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, VerticalNavService } from '../../../../shared/services/vertical-nav.service';

@Component({
  selector: 'app-vertical-sidemenu',
  templateUrl: './vertical-sidemenu.component.html',
  styleUrls: ['./vertical-sidemenu.component.scss'],
})
export class VerticalSidemenuComponent {
  public isShow: boolean = false;
  public menus = this.navService.verticalMenuItem;
  public subMenu: any;
  public pin: boolean = false;
  public URL: string;

  public screenWidth: number;
  public screenHeight: number;

  constructor(public navService: VerticalNavService, public router: Router) {}

  isSideNavOpen = false;

  @Input() isOpen: boolean = false;
}
