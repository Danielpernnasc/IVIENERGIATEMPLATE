import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { questionData } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  public questionData = questionData;

  constructor(config: NgbAccordionConfig) {
		// customize default values of accordions used by this component tree
		config.closeOthers = true;
	}

}
