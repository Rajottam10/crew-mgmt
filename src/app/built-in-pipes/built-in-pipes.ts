import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss'
})
export class BuiltInPipes {
  today: Date = new Date();
  text: string = "aaabbbccc"
  amount: number= 123.456;

  jsonVal: object = {
    "name": "Phil",
    "number": 47
  }

  myObject: {[key: string] : string}={first: "one", second:"2nd"};
}
