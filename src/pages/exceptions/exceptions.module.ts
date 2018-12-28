import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExceptionsPage } from './exceptions';

@NgModule({
  declarations: [
    ExceptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExceptionsPage),
  ],
})
export class ExceptionsPageModule {}
