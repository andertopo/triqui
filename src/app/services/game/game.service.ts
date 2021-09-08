import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Slot from 'src/app/models/Slot';
import { TableService } from '../table/table.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentUser: string;
  winCombinations: any;
  hasWin = new BehaviorSubject<Slot>(null);

  constructor(
    private tableService: TableService
  ) {
    this.winCombinations = [
      [0,4,8],
      [2,4,6],
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
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
    let slotSaved = this.tableService.setUserSlot(slot, this.currentUser);
    if(slotSaved) {
      this.currentUser = (this.currentUser == 'x') ? 'o' : 'x';
      this.validateWin(slot);
    }
  }

  private validateWin(slot: Slot) {
    for(let combination of this.winCombinations) {
      console.log('combinación', combination);
      if(combination.indexOf(slot.index) > -1) {
        console.log('hay combinación');
        let hasThree = this.validateThreeLine(slot, combination);
        console.log('hay tres?', hasThree);
        if(hasThree) {
          this.hasWin.next(slot);
          break;
        }
      }
    }
  }

  private validateThreeLine(slot: Slot, combination: number[]) {
    const slotToUser = this.tableService.slots.filter(slotItem => slot.user == slotItem.user);
    if(slotToUser.length >= 3) {
      let isThree: boolean = true;
      for(let i = 0; i<combination.length; i++) {
        let indexFound = slotToUser.findIndex(slotUserItem => slotUserItem.index == combination[i]);
        if(indexFound < 0) {
          isThree = false;
          break;
        }
      }
      return isThree;
    } else {
      return false;
    }
  }
}
