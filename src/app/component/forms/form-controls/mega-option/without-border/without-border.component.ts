import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-control'

@Component({
  selector: 'app-without-border',
  templateUrl: './without-border.component.html',
  styleUrls: ['./without-border.component.scss']
})
export class WithoutBorderComponent {

  public withoutBorderData = Data.withoutBorder;
}
