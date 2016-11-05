import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: Object = {};

  onSubmitTemplateBased() {
    // this points to the user component class instance
    // the elements with ngModel user.xxx got updated by the form
    // the element without ngModel actually reference a property, doesn't exist on this

    debugger;
    console.log("hola");
  }
}
