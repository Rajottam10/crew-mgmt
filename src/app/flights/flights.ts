import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [],
  templateUrl: './flights.html',
  styleUrl: './flights.scss'
})
export class Flights {

    @Input() message: string ="";

    @Output() messageEvent = new EventEmitter<string>();


    sendMessage(){
        this.messageEvent.emit("Hello from child to parent");
    }
}
