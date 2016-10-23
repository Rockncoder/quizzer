import {Component, OnInit} from '@angular/core';

import {Login} from "./login";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form;
  username ="troy";
  password;

  powers = ['Smarts', 'Flexibility', 'Heat', 'Weather control'];
  model = new Login("Troy", "1T2M", "troy@gmail.com", "flying dog");
  submitted = false;


  onSubmit(formData) {
    this.submitted = true;
    console.log(formData);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
