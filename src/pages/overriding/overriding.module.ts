import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverridingPage } from './overriding';

@NgModule({
  declarations: [
    OverridingPage,
  ],
  imports: [
    IonicPageModule.forChild(OverridingPage),
  ],
})
export class OverridingPageModule {}
