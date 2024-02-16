import { Component, ViewChild } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subject, debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs';

@Component({
  selector: 'app-open-on-focus',
  templateUrl: './open-on-focus.component.html',
  styleUrls: ['./open-on-focus.component.scss']
})
export class OpenOnFocusComponent {

  public searchData = Data.state;

  @ViewChild('instance', {static : true}) instance : NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clickWithClosedPopup$ = this.click$.pipe(filter(() => this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clickWithClosedPopup$).pipe(
      map((term) => 
      (term === '' ? this.searchData : this.searchData.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0,10))
    )
  }
}
