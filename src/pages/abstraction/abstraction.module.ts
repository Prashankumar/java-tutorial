import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbstractionPage } from './abstraction';

@NgModule({
  declarations: [
    AbstractionPage,
  ],
  imports: [
    IonicPageModule.forChild(AbstractionPage),
  ],
})
export class AbstractionPageModule {}
