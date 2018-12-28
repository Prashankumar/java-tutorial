import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecisionmakingPage } from './decisionmaking';

@NgModule({
  declarations: [
    DecisionmakingPage,
  ],
  imports: [
    IonicPageModule.forChild(DecisionmakingPage),
  ],
})
export class DecisionmakingPageModule {}
