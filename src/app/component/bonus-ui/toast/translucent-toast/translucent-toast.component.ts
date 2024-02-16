import { Component } from '@angular/core';
import { translucentToastsData } from '../../../../shared/data/data/toastr/toastr';

@Component({
  selector: 'app-translucent-toast',
  templateUrl: './translucent-toast.component.html',
  styleUrls: ['./translucent-toast.component.scss']
})
export class TranslucentToastComponent {

  public translucentToastsData = translucentToastsData;
  public isShow : boolean = true;

  close(id : number){
    const close = translucentToastsData.filter((data) => {
      return data.id === id;
    })
    close[0].show = false;
  }

}
