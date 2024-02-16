import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagePaths } from 'src/image';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  LogoIVI = ImagePaths;
  @Input() MostrarData: boolean = true;

  public dataAtual: Date;
  @Input() mostarLink: boolean = false; 
  @Input() semLink: boolean = true;
 
  constructor(){
    this.dataAtual = new Date();
  

  }

  
}
