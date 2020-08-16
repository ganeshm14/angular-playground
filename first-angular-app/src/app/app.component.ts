import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : User;
  inputText : string = "initial value";
  
  constructor(private svc:TestService,private http: HttpClient){
    this.user = new User();
    this.user.name = "Ganesh";
    this.user.designation = "Full stack dev",
    this.user.address = "123 st",
    this.user.phone = ['123456789'];
    this.svc.printToConsole("Hello there");
  }

  ngOnInit(){
   let obs = this.http.get('https://api.github.com/users/ganeshm14');
    obs.subscribe((myResponse) => console.log(myResponse));
  }
}
