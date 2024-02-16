import { Component, Input } from '@angular/core';
import * as Data from '../../../shared/data/data/chat/call'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public callData = Data.CallData;
  public openTab : string = "call";

  public tabbed(val: string) {
  	this.openTab = val
  }


}
