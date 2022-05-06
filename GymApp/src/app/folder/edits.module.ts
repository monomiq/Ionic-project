import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditsPageRoutingModule } from './edits-routing.module';

import { EditsPage } from './edits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditsPageRoutingModule
  ],
  declarations: [EditsPage]
})
export class EditsPageModule {}
