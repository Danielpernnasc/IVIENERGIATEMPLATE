import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-html-input',
  templateUrl: './basic-html-input.component.html',
  styleUrls: ['./basic-html-input.component.scss']
})
export class BasicHtmlInputComponent {

  constructor(private router : Router) {}

  submit() {
    this.router.navigate(['form-control/base-input'])
  }

}
