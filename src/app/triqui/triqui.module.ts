import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriquiPageRoutingModule } from './triqui-routing.module';

import { TriquiPage } from './triqui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriquiPageRoutingModule
  ],
  declarations: [TriquiPage]
})
export class TriquiPageModule {}
