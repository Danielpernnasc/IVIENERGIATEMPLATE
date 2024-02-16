import { Component ,Input , OnInit} from '@angular/core';
import { Singlepost } from '../../../../shared/data/data/users/post-data';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit{

  @Input() data: Singlepost;

  constructor() {

  }

  ngOnInit(): void {

  }
}
