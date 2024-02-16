import { Component } from '@angular/core';
import { contextualClassListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-contextual-classes-list',
  templateUrl: './contextual-classes-list.component.html',
  styleUrls: ['./contextual-classes-list.component.scss']
})
export class ContextualClassesListComponent {

  public contextualClassListData = contextualClassListData;
}
