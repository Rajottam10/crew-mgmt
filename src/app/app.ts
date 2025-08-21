import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Crew } from './crew/crew';
import { UsersModule } from './users/users-module';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, Crew, UsersModule, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crew-mgmt');
}
