import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VelozesFuriososPageRoutingModule } from './velozes-furiosos-routing.module';

import { VelozesFuriososPage } from './velozes-furiosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VelozesFuriososPageRoutingModule
  ],
  declarations: [VelozesFuriososPage]
})
export class VelozesFuriososPageModule {}
