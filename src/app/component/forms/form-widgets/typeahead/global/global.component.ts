import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent {

  public searchData = Data.state;

  constructor(config: NgbTypeaheadConfig) {
		// customize default values of typeaheads used by this component tree
		config.showHint = true;
	}

	search = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.searchData.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10),
			),
		);

}
