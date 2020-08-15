import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangulartestapp';

  ngOnInit(){

    var text = "0101011";
    var find = "010";
    var regex = new RegExp(find,"g");
    var matches = [];
    var match;
while(match = regex.exec(text)) {
  console.log('regex last index'+regex.lastIndex)
  console.log('reg exec '+regex.exec(text));
    matches.push(match);
    console.log('match index' +match.index)
    regex.lastIndex = match.index+1;
}
  console.log(matches.length);


  var s = "1010100101";
  var results = [];
  for (var i = 0; true; i += 1) {
      i = s.indexOf("101", i);
      console.log('i value',i);
      if (i === -1) {
          break;
      }
      results.push(i);
  }
  console.log("Match positions: " + results.length);

}
}
