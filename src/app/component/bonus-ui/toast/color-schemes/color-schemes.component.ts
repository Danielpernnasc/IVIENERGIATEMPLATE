import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-schemes',
  templateUrl: './color-schemes.component.html',
  styleUrls: ['./color-schemes.component.scss']
})
export class ColorSchemesComponent {

  public isShow : boolean = false;

  constructor(private toastr : ToastrService){}

  ngOnInit() {}
  
  close(){
    this.isShow = true;
  }

}
