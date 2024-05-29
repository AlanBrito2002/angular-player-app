import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PlayersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Soccer Players';
}
