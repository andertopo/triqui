import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriquiPage } from './triqui.page';

const routes: Routes = [
  {
    path: '',
    component: TriquiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriquiPageRoutingModule {}
