import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateCatPage } from './update-cat';

@NgModule({
  declarations: [
    UpdateCatPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateCatPage),
  ],
})
export class UpdateCatPageModule {}
