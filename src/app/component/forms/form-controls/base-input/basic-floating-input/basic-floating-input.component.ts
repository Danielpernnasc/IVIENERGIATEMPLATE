import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-floating-input',
  templateUrl: './basic-floating-input.component.html',
  styleUrls: ['./basic-floating-input.component.scss']
})
export class BasicFloatingInputComponent {

  public validate = false;
  constructor() { }

  ngOnInit(): void {
  }
  public submit() {
    this.validate = !this.validate;
  }

}
