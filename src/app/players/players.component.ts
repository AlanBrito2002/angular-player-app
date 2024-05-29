import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player } from './player';
import {PLAYERS} from './mock-players';
import { NgFor } from '@angular/common';
//material design
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule,
FormsModule,
NgFor,
MatButtonModule,
MatSlideToggleModule,
MatCardModule,
MatInputModule,
MatToolbarModule,
MatIconModule
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  players = PLAYERS;

  newPlayerName: string = '';
  editingIndex: number = -1;
  editPlayerName: string = '';

  addPlayer() {
    const newPlayer: Player = {
      name: this.newPlayerName
    };
    this.players.push(newPlayer);
    this.newPlayerName = '';
  }

  editPlayer(index: number) {
    this.editingIndex = index;
    this.editPlayerName = this.players[index].name;
  }

  updatePlayer() {
    if (this.editingIndex !== -1) {
      this.players[this.editingIndex].name = this.editPlayerName;
      this.editingIndex = -1;
      this.editPlayerName = '';
    }
  }

  deletePlayer(index: number) {
    this.players.splice(index, 1);
  }

}


