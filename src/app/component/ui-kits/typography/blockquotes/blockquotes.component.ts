import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/typography'

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.component.html',
  styleUrls: ['./blockquotes.component.scss']
})
export class BlockquotesComponent {

  public blockQuotesData = Data.blockQuotesData;
  
}
