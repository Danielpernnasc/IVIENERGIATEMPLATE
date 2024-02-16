import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/icons/fontawesome-icon';

@Component({
  selector: 'app-fontawesome-icon',
  templateUrl: './fontawesome-icon.component.html',
  styleUrls: ['./fontawesome-icon.component.scss']
})
export class FontawesomeIconComponent {

  public fontawesomeIconData = Data.fontawesomeIconData;
  public detail : boolean =false;
  public icon : string;
  public val : string;

  getData(icon: string){
    this.detail=true;
    this.icon=icon;
    this.val='<i class="fa fa-' + icon + '"></i>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="fa fa-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
