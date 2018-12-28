import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyntaxPage } from './syntax';

@NgModule({
  declarations: [
    SyntaxPage,
  ],
  imports: [
    IonicPageModule.forChild(SyntaxPage),
  ],
})
export class SyntaxPageModule {}
