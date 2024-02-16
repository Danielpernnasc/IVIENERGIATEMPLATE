import { Component } from '@angular/core';
import { ImagePaths } from 'src/image';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrl: './header-login.component.scss'
})
export class HeaderLoginComponent {

  LogoIVI = ImagePaths.LogoIVI3;

}
