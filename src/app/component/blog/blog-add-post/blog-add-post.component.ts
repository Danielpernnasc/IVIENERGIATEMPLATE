import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-blog-add-post',
  templateUrl: './blog-add-post.component.html',
  styleUrls: ['./blog-add-post.component.scss']
})
export class BlogAddPostComponent {

  public files: File[] = [];
  selectedCityIds: string[] = [];
  selectedCityId: number = 0;
  selectedUserIds: number[] = [];


  cities2 = [
    {id: 1, name: 'LifeStyle'},
    {id: 2, name: 'Travel'},
];

public editor = ClassicEditor;
  public data: string = `<p>Command Module with a cabin for the three astronauts which was the only part which landed back on Earth
  Service Module which supported the Command Module with propulsion, electrical power, oxygen and watersdsd
  Lunar Module for landing on the Moon.</p>`;

  public config = {
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters'
    ],
    language: 'id',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
  }

  public htmlContent = '';

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
		this.files.splice(this.files.indexOf(event), 1);
	}

}
