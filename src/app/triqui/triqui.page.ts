import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
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
  $hasWinEventSubscription: Subscription;
  hasWin: boolean;

  constructor(
    public gameService: GameService,
    public tableService: TableService,
    private alertController: AlertController
  ) {
    this.tableService.initiallizeTable();
    this.gameService.initalizeUser();
  }

  ngOnInit() {
    this.doTable();
    this.$hasWinEventSubscription = this.gameService.hasWin.subscribe((slotWin: Slot) => {
      if(slotWin) {
        this.hasWin = true;
        this.showAlert(slotWin);
      }
    });
  }

  showAlert(slotWin: Slot) {
    this.alertController.create({
      message: 'El usuario ' + slotWin.user + ' ha ganado!',
      buttons: [
        {
          text: 'Aceptar',
        }
      ]
    }).then(alert => {
      alert.present();
    })
  }

  doTable() {
    this.firstRows = this.tableService.slots.slice(0, 3);
    this.secondRows = this.tableService.slots.slice(3, 6);
    this.thirdRows = this.tableService.slots.slice(6, 9);
  }

  callMovement(slot: Slot) {
    if(!this.hasWin) {
      this.gameService.callMovement(slot);
    }
  }

  reset() {
    this.gameService.initalizeUser();
    this.tableService.initiallizeTable();
    this.doTable();
    this.hasWin = false;
  }
}
