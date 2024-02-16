import { Component } from '@angular/core';
import { verticalStyle } from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-verticle-style',
  templateUrl: './verticle-style.component.html',
  styleUrls: ['./verticle-style.component.scss']
})
export class VerticleStyleComponent {

  public verticalStyle = verticalStyle;

}
