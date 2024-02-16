import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edge-input',
  templateUrl: './edge-input.component.html',
  styleUrls: ['./edge-input.component.scss']
})
export class EdgeInputComponent {

  constructor(private router : Router) {}

  submit() {
    this.router.navigate(['/form-control/base-input'])
  }
}
