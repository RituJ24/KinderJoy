import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumLearnPage } from './num-learn.page';

const routes: Routes = [
  {
    path: '',
    component: NumLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumLearnPageRoutingModule {}
