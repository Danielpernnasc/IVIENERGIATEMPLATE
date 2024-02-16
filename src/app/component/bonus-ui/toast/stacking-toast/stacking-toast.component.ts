import { Component } from '@angular/core';
import { stackingToastData } from '../../../../shared/data/data/toastr/toastr';

@Component({
  selector: 'app-stacking-toast',
  templateUrl: './stacking-toast.component.html',
  styleUrls: ['./stacking-toast.component.scss']
})
export class StackingToastComponent {

  public stackingToastData = stackingToastData;
  public isShow : boolean = true;

  close(id : number){
    const close = stackingToastData.filter((data) => {
      return data.id === id;
    })
    close[0].show = false;
  }

}
