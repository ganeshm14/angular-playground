import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : User;
  inputText : string = "initial value";
  constructor(){
    this.user = new User();
    this.user.name = "Ganesh";
    this.user.designation = "Full stack dev",
    this.user.address = "123 st",
    this.user.phone = ['123456789'];
  }
}
