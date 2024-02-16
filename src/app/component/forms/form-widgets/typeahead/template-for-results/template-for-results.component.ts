import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'
import { Observable, OperatorFunction, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-template-for-results',
  templateUrl: './template-for-results.component.html',
  styleUrls: ['./template-for-results.component.scss']
})
export class TemplateForResultsComponent {

  public flagData = Data.statesWithFlags;
  
  search: OperatorFunction<string, readonly { name: string; flag:string }[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			map((term) =>
				term === ''
					? []
					: this.flagData.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

	formatter = (x: { name: string }) => x.name;
}
