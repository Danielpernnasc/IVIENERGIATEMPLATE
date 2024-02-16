import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/icons/flag-icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: ['./flag-icon.component.scss']
})
export class FlagIconComponent {

  public flagIconData = Data.flagIconData;
  public detail: boolean = false;
  public flag: string;
  public val: string;
  public bottomRightShow : boolean = false;

  constructor(public toastrService:ToastrService) { }

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.flag = icon;
    this.val = '<i class="flag-icon flag-icon-' + icon + '"></i>';

  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="flag-icon flag-icon-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.bottomRightShow = true;

  }

  topBottomClose(){
    this.bottomRightShow = false;
  }
  ngOnInit(): void {

  }
}
