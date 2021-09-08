import { Injectable } from '@angular/core';
import Slot from 'src/app/models/Slot';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  slots: Slot[];

  constructor() { 
  }

  initiallizeTable() {
    this.slots = new Array<Slot>();
    for(let i=0; i<9; i++) {
      let slot: Slot = new Slot();
      slot.index = i;
      this.slots.push(slot);
    }
  }

  setUserSlot(slot: Slot, user: string): boolean {
    let slotSaved = false;
    if(slot.isEmpty) {
      if(user == 'x') {
        slot.image = 'assets/x.png';
        slot.user = 'x';
        slot.isEmpty = false;
      } else {
        slot.image = 'assets/o.png';
        slot.user = 'o';
        slot.isEmpty = false;
      }
      slotSaved = true;
    }
    return slotSaved;
  }
}
