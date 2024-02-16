import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'boho-angular-16';

  constructor(private loader: LoadingBarService) {}

  ngOnDestroy(){
    localStorage.clear()
  }
}
