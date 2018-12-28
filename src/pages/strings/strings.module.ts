import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StringsPage } from './strings';

@NgModule({
  declarations: [
    StringsPage,
  ],
  imports: [
    IonicPageModule.forChild(StringsPage),
  ],
})
export class StringsPageModule {}
