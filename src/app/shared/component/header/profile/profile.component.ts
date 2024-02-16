import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePaths } from 'src/image';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private router : Router) {}

  iconeUsuario = ImagePaths.iconeFundoBranco;
  logOut(){
    localStorage.clear();
    this.router.navigate(['/authentication/simple'])
  }
}
