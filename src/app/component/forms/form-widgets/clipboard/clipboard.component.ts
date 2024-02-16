import { Component ,OnInit} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent implements OnInit {
  clipboardExample1: string = '';
  highLightText: string = 'Web design is the process of creating websites';
  copyHighlightTxt: string =
    'that are visible online. Take a website design course to learn how to create an appealing and responsive website. In the discipline of web design,there are degree, diploma, postgraduate degree, and certificate programmes.A web designer is responsible for a website`s look, feel, and occasionally even content.';
  clipboardExample2: string =
    'A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.';
  basic = false;
  paragraphData =
    'On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn`t, at which point all of the aspirations and dreams collapsed.';

  copyText: string = '';
  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert('Copied');
  }
  cutFunction(id: string) {
    switch (id) {
      case 'clipboardExample1':
        navigator.clipboard.writeText(this.clipboardExample1);
        this.clipboardExample1 = '';
        break;
      case 'clipboardExample2':
        navigator.clipboard.writeText(this.clipboardExample2);
        this.clipboardExample2 = '';
        break;
      default:
        break;
    }
  }
}
