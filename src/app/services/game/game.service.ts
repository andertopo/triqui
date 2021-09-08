import { Injectable } from '@angular/core';
import Slot from 'src/app/models/Slot';
import { TableService } from '../table/table.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentUser: string;
  winCombinations: any;

  constructor(
    private tableService: TableService
  ) {
    this.winCombinations = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]];
  }

  initalizeUser() {
    try {
      this.currentUser = localStorage.getItem('user');
      console.log('user', localStorage.getItem('user'));
      if(!this.currentUser) {
        this.currentUser = 'x';
      }
      this.changeUserToNextGame();
    } catch(err) {
      console.log('fallo al leer del storage', err);
      this.currentUser = 'x';
    }
  }

  private changeUserToNextGame() {
    let userToNexGame = (this.currentUser == 'x') ? 'o' : 'x';
    localStorage.setItem('user', userToNexGame);
  }

  callMovement(slot: Slot) {
    if(slot.isEmpty) {
      if(this.currentUser == 'x') {
        slot.image = 'assets/x.png';
        slot.user = 'x';
        slot.isEmpty = false;
        this.currentUser = 'o';
      } else {
        slot.image = 'assets/o.png';
        slot.user = 'o';
        slot.isEmpty = false;
        this.currentUser = 'x';
      }

      this.validateWin(slot);
    } else {
     console.log('espacio NO vacio');
    }
  }

  private validateWin(slot: Slot) {
    
  }
}
