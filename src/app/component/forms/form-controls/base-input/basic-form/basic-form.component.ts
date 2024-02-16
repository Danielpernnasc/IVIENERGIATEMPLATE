import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {

  constructor(private router:Router) {}

  submit() {
    this.router.navigate(['/form-control/base-input'])
  }
}
