import { Component, signal, effect, Injector } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.scss'
})
export class Signal {
  counter = signal(0);

  username = signal('lalaland');

  users = signal([
    'city',
    'spurs',
    'sunderland',
    'liverpool'
  ]);

  videos = signal({
    title: 'PREMIER',
    description: 'LEAGUE'
  });

  setCounter(){
    this.counter.set(5);
    this.counterEffect();
  }

  updateCounter(){
    this.counter.update(counter => counter+5);   //computed values
  }

    setVideo(){
    this.videos.set({
      'title': 'Mancity',
      'description': 'Champions'
    });
    this.counterEffect();
  }

  constructor(private injector: Injector){
  }

  counterEffect() : void{
    effect(()=>{
      console.log("Value of counter"+this.counter());
      console.log("Value of counter"+this.videos().title);
    },{injector: this.injector})
  }

}
