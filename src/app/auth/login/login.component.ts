import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagePaths } from 'src/image';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public show: boolean = false;
  public loginForm: FormGroup;

  logoCentral = ImagePaths.LogoIVI4
  IconeUsuario = ImagePaths.iconeUsuario

  constructor(private fb: FormBuilder, public router: Router) {
    const userData = localStorage.getItem('user');
      if(userData?.length != null){
        router.navigate(['home-ivienergia/menu/PreProjeto'])
      }

    this.loginForm = this.fb.group({
      usuario: ["Administrador", [Validators.required]],
      password: ["1234", Validators.required],
    });

  }

  ngOnInit() { }

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    if(this.loginForm.value["usuario"] == "Administrador" &&  this.loginForm.value["password"] == "1234"){
      let user = {
        usuario: "Administrador",
        password : "1234",
        name: "test user"

      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["home-ivienergia/menu/PreProjeto"]);
    }
  }
}
