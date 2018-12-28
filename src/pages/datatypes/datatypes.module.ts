import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatatypesPage } from './datatypes';

@NgModule({
  declarations: [
    DatatypesPage,
  ],
  imports: [
    IonicPageModule.forChild(DatatypesPage),
  ],
})
export class DatatypesPageModule {}
