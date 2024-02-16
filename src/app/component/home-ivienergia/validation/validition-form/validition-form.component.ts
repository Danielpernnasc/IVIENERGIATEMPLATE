import { Component } from '@angular/core';

@Component({
  selector: 'app-validition-form',
  templateUrl: './validition-form.component.html',
  styleUrls: ['./validition-form.component.scss']
})
export class ValiditionFormComponent {

  public validate = false;
  constructor() { }

  ngOnInit(): void {
  }
  public submit() {
    this.validate = !this.validate;
  }
}
