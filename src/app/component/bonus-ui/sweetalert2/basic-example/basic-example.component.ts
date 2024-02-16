import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.scss']
})
export class BasicExampleComponent {

  basicAlert(){
    Swal.fire({
      title : 'Welcome! to the Boho theme',
      confirmButtonColor : 'var(--theme-default)',
    })
  }
}
