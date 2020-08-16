import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routes = [
    {link : 'Home', url : 'home'},
    {link : 'Settings', url: 'settings'}
  ];
  title = 'routing-app';
}
