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
}
