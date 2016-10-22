import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent{
  public username:string;
  public password:string;
  public email:string;

  constructor(){
  }
}
