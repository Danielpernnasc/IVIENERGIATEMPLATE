import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  active = 1;
  public openTab : string = "timeline";

  constructor() { }

  public tabbed(val: string) {
  	this.openTab = val    
  }
  
  ngOnInit(): void {
  }
}
