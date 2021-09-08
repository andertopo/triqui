import { Component, OnInit } from '@angular/core';
import Slot from '../models/Slot';
import { GameService } from '../services/game/game.service';
import { TableService } from '../services/table/table.service';

@Component({
  selector: 'app-triqui',
  templateUrl: './triqui.page.html',
  styleUrls: ['./triqui.page.scss'],
})
export class TriquiPage implements OnInit {
  user: string; 
  image: string;
  firstRows: Slot[];
  secondRows: Slot[];
  thirdRows: Slot[];

  constructor(
    public gameService: GameService,
    public tableService: TableService
  ) {
    this.tableService.initiallizeTable();
    this.gameService.initalizeUser();
  }

  ngOnInit() {
    this.doTable();
  }

  doTable() {
    this.firstRows = this.tableService.slots.slice(0, 3);
    this.secondRows = this.tableService.slots.slice(3, 6);
    this.thirdRows = this.tableService.slots.slice(6, 9);
  }

  callMovement(slot: Slot) {
    this.gameService.callMovement(slot);
  }

  reset() {
    this.gameService.initalizeUser();
    this.tableService.initiallizeTable();
    this.doTable(); 
  }
}
