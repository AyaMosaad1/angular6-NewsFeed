import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
/*all probelety in compontant acess only in this component , so I can't acess it in app component
 so I use input from angular to can acess it in app
now for inside use "element" and outside "srvElemen"
 */

element = [{type:'server' ,
name: 'Testserver' , content:'just a test!'}];
constructor() { }

  ngOnInit() {
  }

}
