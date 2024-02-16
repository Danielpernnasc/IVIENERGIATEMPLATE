import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-control'

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.component.html',
  styleUrls: ['./default-style.component.scss']
})
export class DefaultStyleComponent {

  public defaultStyleData = Data.defaultStyle;
}
