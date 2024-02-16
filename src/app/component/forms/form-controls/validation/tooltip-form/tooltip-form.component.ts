import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-form',
  templateUrl: './tooltip-form.component.html',
  styleUrls: ['./tooltip-form.component.scss']
})
export class TooltipFormComponent {
  public validate = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  public submit() {
    this.validate = !this.validate;
  }
  
}
