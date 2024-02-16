import { Component } from '@angular/core';

@Component({
  selector: 'app-color-variant',
  templateUrl: './color-variant.component.html',
  styleUrls: ['./color-variant.component.scss']
})
export class ColorVariantComponent {

  colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"]
  constructor() { }

  ngOnInit(): void {
  }

}
