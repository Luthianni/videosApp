import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VelozesFuriososPage } from './velozes-furiosos.page';

const routes: Routes = [
  {
    path: '',
    component: VelozesFuriososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VelozesFuriososPageRoutingModule {}
