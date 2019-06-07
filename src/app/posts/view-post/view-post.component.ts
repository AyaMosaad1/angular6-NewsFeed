import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-posts-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class  ViewPostComponent implements OnInit
 {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }
}
