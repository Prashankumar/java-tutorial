import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpressionsPage } from './expressions';

@NgModule({
  declarations: [
    ExpressionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpressionsPage),
  ],
})
export class ExpressionsPageModule {}
