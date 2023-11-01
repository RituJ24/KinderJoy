import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaPracticePage } from './alpha-practice.page';

const routes: Routes = [
  {
    path: '',
    component: AlphaPracticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlphaPracticePageRoutingModule {}
