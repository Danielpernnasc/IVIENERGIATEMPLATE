import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-formatted-result',
  templateUrl: './formatted-result.component.html',
  styleUrls: ['./formatted-result.component.scss']
})
export class FormattedResultComponent {

  public searchData = Data.state;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term === '' ? [] : this.searchData.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);
}
