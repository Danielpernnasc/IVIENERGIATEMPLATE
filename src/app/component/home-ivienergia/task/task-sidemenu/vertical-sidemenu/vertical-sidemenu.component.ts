import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, VerticalNavService } from '../../../../../shared/services/vertical-nav.service';

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

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  openSubMenu(item: Menu) {
    this.subMenu = [];
    this.subMenu = this.menus.filter((data) => {
      return data.id === item.id;
    });
    if (!item.active) {
      this.menus.forEach((a: Menu) => {
        if (this.menus.includes(item)) {
          a.active = false;
          a.mainMenuActive = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;

    if (item.active == true) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  close() {
    this.isShow = false;
    this.navService.isDisplay = false;
  }

  active(item: Menu, data: Menu) {
    data.mainMenuActive = true;
    if (!item.active) {
      this.subMenu.forEach((a: Menu) => {
        if (this.subMenu.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
    this.isShow = false;
    data.active = false;
  }
}
