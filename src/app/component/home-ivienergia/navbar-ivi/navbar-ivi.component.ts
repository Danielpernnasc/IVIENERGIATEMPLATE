import { Component } from '@angular/core';
import { SharedServiceService } from '../shared/shared-service.service';

@Component({
  selector: 'app-navbar-ivi',
  templateUrl: './navbar-ivi.component.html',
  styleUrl: './navbar-ivi.component.scss'
  
})
export class NavbarIviComponent {
  isSidenavOpen = false;

  constructor(private sidenavService: SharedServiceService){}
  ngOnInit() {
    this.sidenavService.isSidenavOpen$.subscribe(isOpen => {
      this.isSidenavOpen = isOpen;
    });
  }
}
