import { Component } from '@angular/core';
import * as userinformation from '../../../../shared/data/data/ecommerce/user-information';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent {

  public userinformationData = userinformation.UserInformationData;
  public isOpen : boolean = false;
  public openId : number;

  public open : boolean = false;

  toggle(){
    this.open =! this.open;
  }

  openMenu(id : number){
    this.userinformationData.filter((data) => {
      if(data.id === id){
        this.openId = id;
        this.isOpen =! this.isOpen;
      }
    })
  }

  deleteData(data : any){    
    this.userinformationData.splice(data, 1);
  }
}
