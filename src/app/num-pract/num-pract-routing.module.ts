import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumPractPage } from './num-pract.page';

const routes: Routes = [
  {
    path: '',
    component: NumPractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumPractPageRoutingModule {}
