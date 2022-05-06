import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditsPage } from './edits.page';

const routes: Routes = [
  {
    path: '',
    component: EditsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditsPageRoutingModule {}
