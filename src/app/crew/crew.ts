import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Flights } from '../flights/flights';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [MatButtonModule, Flights],
  templateUrl: './crew.html',
  styleUrl: './crew.scss'
})
export class Crew {

  messageForComponent: string = "Hello world";
  userToken: string = "abcd1234"

receivedMessage: string = "";

  receivingMessage(message: string): void{
    this.receivedMessage = message;
  }
}
