import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as feather from 'feather-icons';
import { HideNavScrollService } from '../../../../shared/services/hide-nav-scroll.service';
import { LayoutService } from '../../../../shared/services/layout.service';
import { VerticalNavService } from '../../../../shared/services/vertical-nav.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  currentRoute: string;
  public urlPath : string;

  constructor(
    public navService: VerticalNavService,
    public layout: LayoutService,
    public hidenav: HideNavScrollService,
    private router : Router
    ) { }

  ngOnInit(): void {
    const url = this.router.url;

  }


  ngAfterViewInit() {
    feather.replace();
  }

  get layoutClass() {
    return (
      this.layout.config.settings.sidebar_type +
      ' ' +
      this.layout.config.settings.layout.replace('layout', 'sidebar')
    );
  }

}
