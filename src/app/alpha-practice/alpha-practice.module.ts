import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphaPracticePageRoutingModule } from './alpha-practice-routing.module';

import { AlphaPracticePage } from './alpha-practice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphaPracticePageRoutingModule
  ],
  declarations: [AlphaPracticePage]
})
export class AlphaPracticePageModule {}
