import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit{
  public openTab : string = "febric";

  constructor() { }
  public tabbed(val: string) {
  	this.openTab = val
  }
  ngOnInit(): void {
  }

}
