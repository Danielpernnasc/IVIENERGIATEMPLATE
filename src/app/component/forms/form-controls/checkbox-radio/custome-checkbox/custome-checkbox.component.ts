import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-control'

@Component({
  selector: 'app-custome-checkbox',
  templateUrl: './custome-checkbox.component.html',
  styleUrls: ['./custome-checkbox.component.scss']
})
export class CustomeCheckboxComponent {

  public borderedCheckBox = Data.borderedCheckBox;
  public iconCheckBox = Data.iconCheckBox;
  public filledCheckBox = Data.filledCheckBox;
  
}
