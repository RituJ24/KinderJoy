import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumPractPageRoutingModule } from './num-pract-routing.module';

import { NumPractPage } from './num-pract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumPractPageRoutingModule
  ],
  declarations: [NumPractPage]
})
export class NumPractPageModule {}
