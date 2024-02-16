import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raise-input',
  templateUrl: './raise-input.component.html',
  styleUrls: ['./raise-input.component.scss']
})
export class RaiseInputComponent {

  constructor(private router : Router) {}

  submit() {
    this.router.navigate(['form-control/base-input'])
  }

}
