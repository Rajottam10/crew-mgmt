import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Crew } from './crew/crew';
import { UsersModule } from './users/users-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Crew, UsersModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crew-mgmt');
}
