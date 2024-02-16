import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../../../shared/services/nav.service';

interface selectedlanguage{
  language? : string;
  code? : any;
  type? : string;
  icon? : string;
}
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  public language: boolean = false;

  public languages : selectedlanguage[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'PT',
    icon: 'pt'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'br'
  },
]

  public selectedLanguage : selectedlanguage = {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'br'
  }

  constructor(public navServices: NavService, private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(lang: selectedlanguage) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }
}
